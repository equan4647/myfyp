import React, { Component } from 'react'
// import NewsSlider from '../../commponents/widgets/newsSlider/slider'
// import NewsList from '../widgets/NewsList/newsList'
// import { prediction, toxic } from '../../model'
//import { prediction, toxic } from '../../model'
//import Scraper from '../scr/scraper'
import Model from '../model/model'
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './../home/home.css'
//import '../scr/scraper'

export default class Home extends Component {

    state = {
        intial: true,
        ready: false,
        word: null,
        retry: false,
        buttRnd: true
    }

    submitText = (event) => {
        this.setState({
            word: event.target
        })
    }
    handleChange = (e) => {
        this.setState({ word: e.target.value });
    }


    handleClick = () => {
        console.log(this.state.word);
        this.setState({
            ready: true,
            intial: false,
            buttRnd: false
        });
        this.model();
    }
    onClickRetry = () => {
        this.setState({
            intial: true,
            buttRnd: true
        });
    }

    retry = () => {

        return (
            <div style={{
                marginLeft: -400,
                marginTop: '50px'
            }} align="center">
                <button onClick={this.onClickRetry}>  Cancel / Retry </button>
            </div>
        )

    }
    model = () => {

        if (this.state.intial) return (
            <div></div>
        );
        else if (this.state.ready)
            return (
                <React.Fragment>
                    <Model word={this.state.word} ready={true} />
                    {this.retry()}
                </React.Fragment>
            )
    }


    rndbtn = () => {
        if (this.state.buttRnd)
            return (<button onClick={this.handleClick} style={{
                marginLeft: '20px'
            }}>Test </button>)
    }





    render() {

        return (
            <div style={{
                marginTop: '100px',
                marginLeft: '350px'
            }}>

                <span className='note' style={{

                    marginTop: '100px',
                    marginRight: '20px'
                }}>Input : </span>
                <input type='textarea' name='inp' onChange={this.handleChange} />
                {this.rndbtn()}
                {this.model()}
                {/* <NewsSlider
                    type='featured'
                    start={0}
                    amount={3}
                    settings={{
                        dots: false
                    }}
                />
                <NewsList
                    type='card'
                    loadmore={true}
                    start={3}
                    amount={3}
                /> */}

            </div>
        )
    }
}

