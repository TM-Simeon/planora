import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './login.module.css';
import passwordIcon from '../assets/passwordIcon.png';
import usernameIcon from '../assets/usernameIcon.png';
// import Login from './components/login';
// import SignUp from './components/signup';





function Login() {
    return (
        <div className={classes.login}>
         <div className={classes.buttons}>
             <p>Welcome Back</p>
             <p>Login to your account</p>
             <div className={classes.button}>
                <input type="text" placeholder="Username"  className={`${classes.input} ${classes.emailInput}`} />
                <input type="password" placeholder="Password"  className={`${classes.input} ${classes.passwordInput}`} />
                <div className={classes.loginOptions}>
                    <div className={classes.rememberMe}>
                        <input type="checkbox" className={classes.checkbox} />
                        <label className={classes.label}>Remember Me</label>
                    </div>
                    <label className={classes.label}>Forget Password?</label>
                </div>
                <NavLink to="/events" className={classes.loginNav}>Login</NavLink>
                <div className={classes.organizer}>
                    <p>An Organizer?</p>
                    <NavLink to="/signup" className={classes.organizerAccount}>Login or Sign Up</NavLink>
                </div>
             </div>
           
         </div>
     
        </div>
        
       );
}

export default Login;
