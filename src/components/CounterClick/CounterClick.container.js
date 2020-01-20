import React, { useState, useEffect } from "react";
import CounterClick from "./CounterClick";
import axios from "axios";

const Container = props => {
  const [counter, setCounter] = useState(0);
  
  // TODO - move this
  const serviceEndpoint = "http://localhost:8080/counter"

  useEffect(() => {
    fetchData();
  });

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
