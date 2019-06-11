import React from 'react'
import styles from './footer.css'
import { Link } from 'react-router-dom'
import { current_year } from '../../config'


const footer = () => {
    return (
        <div className={styles.footer}>
            <Link to='/' className={styles.logo}>
                <img alt="psl logo" src='/images/pakistan-super-league-psl-logo-422FBD953E-seeklogo.com.png' />
            </Link>
            <div className={styles.right}>
                @PSL {current_year}  All rights reserved
            </div>
        </div>
    )
}
export default footer;