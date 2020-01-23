import React, { useState, useEffect } from "react";
import CounterClick from "./CounterClick";
import axios from "axios";
import { backendDomain, websocketDomain } from "../../config";

const serviceEndpoint = backendDomain + "/counter";
const webSocketEndpoint = websocketDomain + "/bananas";

console.log("ws endpoint", webSocketEndpoint);

const ws = new WebSocket(webSocketEndpoint);

const Container = props => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchData();

    ws.onmessage = eve => {
      console.log("---", eve.data);
      setCounter(eve.data);
    };
    ws.onopen = () => {
      console.log("opening websocket...");
    };
    ws.onerror = err => {
      console.error("webSocket error ", err);
    };
  
    ws.onclose = eve => {
      console.log('on close foi cos pitos event ',eve)
    }

  }, [counter]);

  const fetchData = () => {
    axios
      .get(serviceEndpoint)
      .then(response => setCounter(response.data))
      .catch(error =>
        console.error("error getting counter value with error: ", error)
      );
  };

  const handleIncrement = () => {
    axios
      .post(serviceEndpoint, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => setCounter(response.data))
      .catch(error =>
        console.error("error incrementing counter value with error: ", error)
      );
  };

  return (
    <CounterClick
      {...props}
      counter={counter}
      handleIncrement={handleIncrement}
    />
  );
};

export default Container;
