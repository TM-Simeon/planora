import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import { NavLink } from 'react-router-dom'; 
import classes from './home.module.css';






function Home() {

  return (
   <div className={classes.home}>
    <div className={classes.buttons}>
        <p>Plan Any <br></br>Event in the<br></br> World</p>
        <div className={classes.button}>
            <NavLink to="/login" className={classes.homeNav}>Login</NavLink>
            <NavLink to="/signup" className={classes.homeNav}>Sign Up</NavLink>
        </div>
      
    </div>

   </div>
   
  );
}

export default Home;
