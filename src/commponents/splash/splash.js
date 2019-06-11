import React from 'react'
import styles from '../../commponents/splash/splash.css'
import Grd from '../new_graphs'

const splash = () => {
    return (
        <div className={styles.Heading}>
            <h1>
                Detecting Toxic Tweets
            </h1>
            <h3>
                Final Year Project Related to Research work based on detection of toxicity acorss twitter
            </h3>
            <Grd></Grd>
        </div>
    );
}

export default splash; 