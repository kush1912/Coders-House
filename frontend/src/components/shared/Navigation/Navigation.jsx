import React from 'react'
import {Link } from 'react-router-dom';

import styles from './Navigation.module.css'

export default function Navigation() {
    //javaScript doesn't allow '-' hence we use camelCase to Apply classes.
    const brandStyle={
        color:'fff',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'18px',
        display:'flex',
        alignItems:'center'
    }

    const logoText={
        marginLeft:'10px',
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="./images/hand-icon.png" alt="logo" />
                <span style={logoText}>Coders House</span>
            </Link>
        </nav>
    )
}
