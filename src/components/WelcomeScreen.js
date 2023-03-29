import React from 'react';
import ComposeMail from './ComposeMail';
import classes from './WelcomeScreen.module.css'

const WelcomeScreen = () => {
  return (
    <div >
    <h1 className={classes.parent}>Welcome to Mail Box Client!</h1>
    <div className={classes.line}></div>
    <ComposeMail />
    </div>
  )
}

export default WelcomeScreen