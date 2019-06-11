import * as toxicity from '@tensorflow-models/toxicity';
import React, { Component } from 'react'
import loading from '../../../src/loading.gif';
import Chart from './displayChart';
import Paper from '@material-ui/core/Paper';

const threshold = 0.8;
var prediction;
const labelsToInclude = ['toxicity'];



export default class Model extends Component {
  state = {
    pred: null,
    read: false,
    awiat: true
  }

  toxic = (word) => {
    console.time('model');
    toxicity.load(threshold, labelsToInclude).then(model => {
      model.classify(word).then(predictions => {
        console.log(predictions);
        prediction = predictions;
        this.setState({
          pred: prediction,
          read: true
        })
        console.timeEnd('model');
        return predictions;

      });
    });
    return prediction;
  }



  display = () => {
    console.log('inside');
    if (this.state.read)
      return (
        <Paper style={{ width: 750 }}>
          <div>
            {this.state.pred.map((prediction, index) => (
              <ul key={index}>
                {prediction.results.map((result, num) => (
                  <ul key={num} style={{ marginLeft: -40 }}>
                    <Chart safe={result.probabilities[num]} toxic={result.probabilities[num + 1]} Name={prediction.label} w={200} h={100}></Chart>
                    <div align="center" style={{ padding: 40 }}>
                      {/* {`Toxic :  ${String(result.match)} \nSafe Level : ${result.probabilities[num]} \n Toxic Level : ${result.probabilities[num + 1]}`} */}
                      {`Toxic :  ${String(result.match)}`}
                      <br />
                      {`Safe Level : ${result.probabilities[num]}`}
                      <br />
                      {`Toxic Level : ${result.probabilities[num + 1]}`}
                    </div>
                  </ul>
                ))
                }
              </ul>
            ))}

          </div>
        </Paper>
      );
    else return (
      <Paper style={{
        width: 400,
        marginTop: 40,
        marginLeft: 200,
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
      console.log(this.props.word);
      this.toxic(this.props.word);
    }
    return (
      <div>
        {this.display()}
      </div>
    )
  }
}
