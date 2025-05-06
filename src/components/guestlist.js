import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './guestlist.module.css';
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
import backArrow from '../assets/back.png';
import alert from '../assets/alert.png';









function GuestList() {
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
            <div className={classes.createEventbar}>
                    <img src={backArrow} alt="Back" className={classes.backArrow} />
                    <p>Guest List</p>
                    <img src={alert} alt="Alert" className={classes.alertIcon} />
            </div>
            <div className={classes.summaryNotes}>
                <p>Total Guests</p>
                <div className={classes.numbersBlock}>
                    <div className={classes.numbers}>
                        <p className={classes.numbersValue1}>100</p>
                        <p>Attending</p>
                    </div>
                    <div className={classes.numbers}>
                        <p className={classes.numbersValue2}>50</p>
                        <p>Declined</p>
                    </div>
                    <div className={classes.numbers}>
                        <p className={classes.numbersValue3}>50</p>
                        <p>Pending</p>
                    </div>
                </div>
                <p>Guest Management</p>
               
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

export default GuestList;
