import React from 'react'
import style from './sidenav.css'
import FontAwesome from "react-fontawesome";
import { Link } from 'react-router-dom'

const SideNavItem = () => {

    const Items = [
        {
            type: style.option,
            icon: 'home',
            link: '/',
            text: 'Home'
        },
        {
            type: style.option,
            icon: 'file-text-o',
            link: '/demo',
            text: 'Demo'
        },
        {
            type: style.option,
            icon: 'play',
            link: '/gettweets',
            text: 'Get Tweets'
        },
        {
            type: style.option,
            icon: 'sign-in',
            link: '/working',
            text: 'Working'
        }

    ]

    const showitem = () => {
        return Items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showitem()}
        </div>
    )
}
export default SideNavItem;


