import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './events.module.css';
import image1 from '../assets/image1.png';
import clock from '../assets/clock.png';
import location from '../assets/location.png';
import event from '../assets/event.png';
import home from '../assets/home.png';
import tickets from '../assets/tickets.png';
import guest from '../assets/guest.png';
import plus from '../assets/plus.png';
import bar from '../assets/bar.png';
import notification from '../assets/notification.png';
import profile from '../assets/profile.png';







function Events() {
    const data = [
        {
            id: 1,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: image1,
        },
        {
            id: 2,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: image1,
        },
        {
            id: 3,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: image1,
        },
        {
            id: 4,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: image1,
        },
        {
            id: 5,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: image1,
        },
        {
            id: 6,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: image1,
        },
        
    ]

    return (
        <div className={classes.dashboard}>
            <div className={classes.welcomeNotecontainer}>
                <div className={classes.todayDate}>
                    25/04/25
                </div>
                <div className={classes.welcomeNote}>
                    <p className={classes.title}>Welcome back, Hauwa!</p>
                    <div className={classes.icons}>
                        <img src={notification} alt="" className={classes.icon} />
                        <img src={profile} alt="" className={classes.icon} />
                    </div>
                </div>
               
            </div>
            <div className={classes.searchContainer}>
                <input type="text" placeholder="Search" className={classes.search} />
                <div className={classes.searchIcon}>
                    <img src={bar} alt="" className={classes.icon} />
                </div>
            </div>
            {Object.entries(data).map(([key, entry]) => (
                <div className={classes.eventContainer} key={entry.id || key}>
                    <div className={classes.event}>
                        <img src={entry.image} alt="" className={classes.image} />
                        <div className={classes.eventDetails}>
                            <p>{entry.title}</p>
                            <div className={classes.location}>
                                <img src={location} alt="" className={classes.icon} />
                                <p>{entry.location}</p>
                            </div>
                            <div className={classes.date}>
                                <img src={clock} alt="" className={classes.icon} />
                                <p>{entry.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={classes.footlinks}>
                <div className={classes.footlink}>
                    <img src={home} alt=" " className={classes.icon} />
                    <label className={classes.label}>Home</label>
                </div>
                <div className={classes.footlink}>
                    <img src={guest} alt=" " className={classes.icon} />
                    <label className={classes.label}>My Guest</label>
                </div>
                <div className={`${classes.footlink} ${classes.plus}`}>
                    <img src={plus} alt=" " className={classes.icon} />
                </div>
                <div className={classes.footlink}>
                    <img src={tickets} alt=" " className={classes.icon} />
                    <label className={classes.label}>Tickets</label>
                </div>
                <div className={classes.footlink}>
                    <img src={event} alt=" " className={classes.icon} />
                    <label className={classes.label}>Event</label>
                </div>
            </div>
        

        </div>
        
       );
}

export default Events;
