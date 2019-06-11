import React, { Component } from 'react'
import axios from 'axios';
import MultiModel from '../model/multiModel'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import loading from '../../../src/load.gif';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});


var c = 1;
///TEST
const test = ["5 jobs I've had: ", "- soccer/paintball ref", "- grocery store bagger/cart-pusher", "- kitchen slave-boy (runner) ", "- gas station cash register attendent", "- furniture delivery and assembly", "Winner bracket secured", "Anybody got a picture of keen when they announced febby's mvp?", "Stream is back later tonight."];
//
export default class getTweets extends Component {

    state = {

        handle: null,
        tweets: null,//null,
        ready: false//false
    }

    handleChange = (e) => {
        this.setState({ handle: e.target.value });
    }

    renderState = () => {
        if (this.state.ready) {
            return (

                // <div>
                //     {console.log(JSON.stringify(this.state.tweets))}
                //     {this.state.tweets.map((tweet, index) => (
                //         <ul key={index}>
                //             {tweet}
                //         </ul>
                //     ))}
                //     <MultiModel tweets={this.state.tweets} />
                // </div>
                <React.Fragment>
                    <Typography variant="h6" style={{
                        marginLeft: 40,
                        marginTop: 20
                    }}>
                        Tweet Analysis:</Typography>
                    <Paper style={{
                        width: 1200,
                        marginTop: 40,
                        marginLeft: 40
                    }}>
                        <Table style={{
                            width: 1200
                        }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Number</TableCell>
                                    <TableCell align="center">Tweet</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tweets.map((tw, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="center">{tw}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    <MultiModel tweets={this.state.tweets} />
                </React.Fragment>
            )
        }
        if (this.state.loading) {
            return (
                <Paper style={{
                    width: 400,
                    marginTop: 40,
                    marginLeft: 400,
                    padding: 30
                }}>
                    <div>
                        <h3 align="center">Gathering Tweets</h3>
                        <img src={loading} style={{
                            width: '400px'
                        }} alt='model'></img>
                    </div>
                </Paper>
            )
        }
    }






    handleClick = () => {
        this.setState({ loading: true })
        axios.get(`http://localhost:5000/${this.state.handle}`)
            .then(response => {
                console.log("this is responce");
                console.log(response.data.message);
                response.data.message.shift()
                this.setState({
                    tweets: response.data.message,
                    ready: true,
                    loading: false
                });
            })
    }

    render() {

        return (
            <div style={{
                marginTop: '150px',
                marginLeft: '100px'
            }}>

                <span className='note' style={{
                    marginLeft: '2px',
                    marginTop: '100px',
                    marginRight: '20px'
                }}>Twitter Handle : </span>
                <input type='textarea' name='inp' onChange={this.handleChange} style={{ marginLeft: 60 }} />
                <button onClick={this.handleClick} style={{ marginLeft: 80 }}>Get Data</button>
                {this.renderState()}

            </div>
        )
    }
}
