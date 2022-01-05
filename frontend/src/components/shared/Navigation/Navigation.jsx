import React from 'react'
import {Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <h1>This is Navigatioon</h1>
            <Link to="/">
                <img src="./images/hand-icon.png" alt="logo" />
                <span>Coders House</span>
            </Link>
        </nav>
    )
}
