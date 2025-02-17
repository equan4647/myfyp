import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../../config'
import styles from './newslist.css'


export default class NewsList extends Component {

    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }


    request = (start, end) => {

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data]
                })
            })

    }

    renderNews = (type) => {
        let template = null;
        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => (

                    <div key={i}>
                        <div className={styles.newslist_item}>
                            <Link to={`/articles/${item.id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </div>
                ))
                break;

            default:
                template = null;
                break;
        }
        return template;
    }

    loadMore = () => {
        var end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }


    render() {

        return (
            <div>
                {this.renderNews(this.props.type)}
                <div onClick={() => this.loadMore()}>
                    LoadMore
                </div>
            </div>

        )
    }
}
