import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './commponents/home/home';
import Layout from './hoc/layout/layout'
import Splash from './commponents/splash/splash';
import Gettweet from './commponents/gettweets/gettweets';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={Splash}></Route>
                    <Route path='/demo' exact component={Home}></Route>
                    <Route path='/gettweets' exact component={Gettweet}></Route>
                </Switch>
            </Layout>
        )
    }
}
export default Routes;