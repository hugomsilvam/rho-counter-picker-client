import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styles from './CounterClick.styles'

const CounterClick = ({classes, counter, handleIncrement}) => (
    <div className={classes.root}>
        <Typography variant="h1">Amazing counter</Typography>
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.counterText} variant="h2">{counter}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" onClick={handleIncrement}><Typography>Click Me</Typography></Button>
            </CardActions>

        </Card>
    </div>
)

export default withStyles(styles)(CounterClick)