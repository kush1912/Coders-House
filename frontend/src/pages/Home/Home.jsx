import React from 'react'

import {Link, useNavigate } from 'react-router-dom'

import styles from './Home.module.css';
import { Card } from '../../components/shared/Card/Card';
import { Button } from '../../components/shared/Button/Button';
import {WELCOME_TITLE} from '../../components/shared/Constants/Constants';


function Home() {
    const signinLinkStyle={
        color:'#0077ff',
        fontWeight:'bold',
        textDecoration:'none',
        marginLeft:'10px'
    }

    const navigate = useNavigate();
    function startRegister(){
        console.log('Buton Clicked!');
        navigate(`/register`)
    }

    return (
        <div className={styles.cardWrapper}>
            <Card heading={WELCOME_TITLE} icon="hand-icon">
                <div>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi dignissimos, enim aspernatur cumque consequuntur nam, omnis animi, illo voluptates est? Ad, temporibus. Id ea repellat adipisci quas eaque culpa?
                    </p>
                    <div>
                        <Button onClick={startRegister} text="Get your username" icon="arrow"/>
                    </div>
                    <div className={styles.signinWrapper}>
                        <span className={styles.hasInvite}>Have an Invite text?</span>
                        <Link style={signinLinkStyle} to="/login">Sign in</Link>
                    </div>  
                </div>
            </Card>
        </div>
      )
}

export default Home
