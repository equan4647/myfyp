import React, { Component } from 'react'
import Header from '../../commponents/header/header'
//import Footer from '../../commponents/footer/footer'
import './layout.css';

export default class layout extends Component {

    state = {
        showNav: false
    };

    toggleSideNav = (action) => {
        this.setState({
            showNav: action
        })
    };


    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSideNav(false)}
                    onOpenNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}

            </div>
        )
    }
}
