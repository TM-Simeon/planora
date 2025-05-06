import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './signup.module.css';
import passwordIcon from '../assets/passwordIcon.png';
import usernameIcon from '../assets/usernameIcon.png';





function SignUp() {

    return (
        <div className={classes.login}>
         <div className={classes.buttons}>
             <p>Register</p>
             <p>Create your account</p>
             <div className={classes.button}>
                <input type="text" placeholder="Username"  className={`${classes.input} ${classes.usernameInput}`} />
                <input type="email" placeholder="Email Address"  className={`${classes.input} ${classes.emailInput}`} />
                <input type="password" placeholder="Password"  className={`${classes.input} ${classes.passwordInput}`} />
                <input type="password" placeholder="Confirm Password"  className={`${classes.input} ${classes.passwordInput}`} />

                <div className={classes.signupterms}>
                    <p>By registering, you are agreeing to our Terms of use and Privacty Policy</p>
                </div>
                <NavLink to="/login" className={classes.loginNav}>REGISTER</NavLink>
                <div className={classes.organizer}>
                    <p>Already have an account?</p>
                    <NavLink to="/login" className={classes.organizerAccount}>Login</NavLink>
                </div>
             </div>
           
         </div>
     
        </div>
        
       );
}

export default SignUp;
