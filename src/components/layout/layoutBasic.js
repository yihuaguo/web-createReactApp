import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './layoutBasic.less'

const LayoutBasic = () => {

    return <div className={styles.global}>
        <header>
            <div className={styles.wrapper}>
                333333333333333
            </div>
        </header>
        <div className={styles.centent}>
            <div className={styles.wrapper}>
                <Outlet />
            </div>
        </div>
        <footer>
            <div className={styles.wrapper}>
                333333333
            </div>
        </footer>
    </div>
}

export default LayoutBasic