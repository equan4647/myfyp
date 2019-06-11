import React from 'react';
import { Link } from 'react-router-dom'
import style from './header.css'
import FontAwesome from 'react-fontawesome'
import SideNav from './Sidenav/sidenav'

const Header = (props) => {

    const logo = () => {
        return (
            <Link to='/' className={style.logo} >
                <img alt="psl loge" src='/images/3.png' />
            </Link >
        )
    }

    const navBars = () => {
        return (
            <div className={style.bars}>
                <FontAwesome name="bars"
                    onClick={props.onOpenNav}
                    style={{
                        padding: '10px 12px 0px 10px',
                        cursor: 'pointer'
                    }}
                />
            </div>)
    }

    return (
        <header className={style.header}>
            <SideNav {...props} />
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )

}

export default Header;