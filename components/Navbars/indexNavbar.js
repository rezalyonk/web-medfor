import React from 'react'
import styles from './styleNavbar.module.css'
import Navbars from './Navbars'

export default function indexNavbar() {
    return (
        <div className={`${styles.containerMainDisplay} container-fluid row`}>
            {/* <h1>Tampilan index Navbar</h1> */}
            <div className={`col`}>
                <Navbars />
            </div>
        </div>
    )
}
