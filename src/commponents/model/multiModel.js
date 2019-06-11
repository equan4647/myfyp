import * as toxicity from '@tensorflow-models/toxicity';
import React, { Component } from 'react'
import loading from '../../../src/loading.gif';
import Chart from './displayChart';
import Line from './displayline'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const threshold = 0.8;
var prediction;
const labelsToInclude = ['toxicity'];
var full_tox = 0;
var full_safe = 0;
var tox = [];
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

///////////////////////////////////////////TEST DATA


const Test = [{ "label": "toxicity", "results": [{ "probabilities": { "0": 0.9995885491371155, "1": 0.00041141282417811453 }, "match": false }, { "probabilities": { "0": 0.9992279410362244, "1": 0.0007721741567365825 }, "match": false }, { "probabilities": { "0": 0.9970235824584961, "1": 0.0029764140490442514 }, "match": false }, { "probabilities": { "0": 0.9959075450897217, "1": 0.0040924339555203915 }, "match": false }, { "probabilities": { "0": 0.9879599809646606, "1": 0.012040194123983383 }, "match": false }, { "probabilities": { "0": 0.9997451901435852, "1": 0.00025485799415037036 }, "match": false }, { "probabilities": { "0": 0.9993959069252014, "1": 0.00060409982688725 }, "match": false }, { "probabilities": { "0": 0.9995185136795044, "1": 0.00048149129725061357 }, "match": false }, { "probabilities": { "0": 0.9995853304862976, "1": 0.0004146635183133185 }, "match": false }, { "probabilities": { "0": 0.9994102716445923, "1": 0.0005897543160244823 }, "match": false }] }]


function add_Tox(num) { full_tox += num };
function add_Safe(num) { full_safe += num };
function pushTox(num) { tox.push(num) }


//////////////////////////Test ENd
export default class multiModel extends Component {
  state = {
    pred: null, //null,
    read: false,//false,
    awiat: true,
    new_ready: false
  }


  toxic = () => {
    console.time('model');
    toxicity.load(threshold, labelsToInclude).then(model => {
      model.classify(this.props.tweets).then(predictions => {
        console.log(predictions);
        prediction = predictions;
        this.setState({
          pred: prediction,
          read: true
        })
        console.timeEnd('model');
        console.log(JSON.stringify(predictions));
        return predictions;

      });
    });
    return prediction;
  }



  display = () => {
    console.log('inside');
    if (this.state.read)
      return (

        // <div>
        //   {this.state.pred.map((prediction, index) => (
        //     <ul key={index}>
        //       {prediction.results.map((result, num) => (
        //         <ul key={num}>
        //           <Chart safe={result.probabilities[num]} toxic={result.probabilities[num + 1]} Name={prediction.label}></Chart>
        //           {`Toxic :  ${String(result.match)} \nSafe Level : ${result.probabilities[num]} \n Toxic Level : ${result.probabilities[num + 1]}`}
        //         </ul>
        //       ))
        //       }
        //     </ul>
        //   ))}

        // </div>

        <React.Fragment>
          <Typography variant="h6" style={{
            marginLeft: 40,
            marginTop: 40,
          }}>        Analysis:</Typography>
          <Grid container spacing={24} style={{
            marginTop: 40
          }}>

            {this.state.pred.map((prediction) => (

              prediction.results.map((answer, i) => (
                // answer.probabilities.map((val, i) => (
                //   val
                // ))
                //  <ul><

                <Grid item xs={3} >

                  <Paper style={{
                    width: 350,
                    height: 350,
                    padding: 4
                  }}>
                    <Typography variant="button" align="center" gutterBottom>
                      Tweet No : {i + 1}</Typography>
                    <Chart safe={answer.probabilities[0]} toxic={answer.probabilities[1]} Name={prediction.label} w={140} h={100}></Chart>
                    {/* {`Toxic :  ${String(answer.match)``} \nSafe Level : ${answer.probabilities[0]} \n Toxic Level : ${answer.probabilities[1]}`} */}
                    {`Toxic : ${String(answer.match)}`}
                    <br />
                    {`Safe Level : ${answer.probabilities[0]}`}
                    <br />
                    {`Toxic Level : ${answer.probabilities[1]}`}

                  </Paper>

                  {add_Safe(answer.probabilities[0])}
                  {add_Tox(answer.probabilities[1])}
                  {pushTox(answer.probabilities[1])}
                  {/* //</ul> */}
                </Grid>

              ))

            ))}
          </Grid>
          <Paper style={{
            marginTop: 20,
            padding: 10,
            width: 1456
          }}>
            <Typography variant="h6" align="center" style={{
              marginLeft: 40,
              marginBottom: 50,
            }}>Overall Analysis:</Typography>
            <Chart safe={full_safe / this.props.tweets.length} toxic={full_tox / this.props.tweets.length} Name="Over All Analysis" w={300} h={100} ></Chart>
            <hr />
            <Line linedata={tox} number={this.props.tweets.length} />
          </Paper>
        </React.Fragment>
      );
    else return (
      <Paper style={{
        width: 400,
        marginTop: 40,
        marginLeft: 400,
        padding: 30
      }}>
        <div>
          <h3 align="center"> Analyzing Data</h3>
          <img src={loading} style={{
            width: '400px'
          }} alt='model'></img>
        </div>
      </Paper>
    )


  }


  render() {
    if (!this.state.read && this.state.awiat) {
      console.log(this.props.tweets);
      this.toxic();
    }
    return (
      <React.Fragment>
        {this.display()}
      </React.Fragment>
    )
  }
}
