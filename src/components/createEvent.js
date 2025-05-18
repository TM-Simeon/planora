import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import backArrow from '../assets/back.png';
import alert from '../assets/alert.png';
import classes from './createEvent.module.css';
import uploadImage from "../assets/uploadimage.png";
import { upload } from '@testing-library/user-event/dist/upload';






function CreateEvent() {

    return (
        <div className={classes.createEventContainer}>
            <div className={classes.createEvent}>
            <div>
                <div className={classes.createEventbar}>
                    <img src={backArrow} alt="Back" className={classes.backArrow} />
                    <p>Create Your Event</p>
                    <img src={alert} alt="Alert" className={classes.alertIcon} />
                </div>
                <div className={classes.uploadImage}>
                    <label htmlFor="cover-upload" className={classes.uploadLabel}>
                        <img src={uploadImage} alt="Alert" className={classes.alertIcon} />
                        <p>Upload Event Image</p>
                    </label>
                    <input type="file" id="cover-upload" accept="image/*" className={classes.uploadInput}/>
                </div>
                <div>
                    <div className={classes.eventName}>
                        <label htmlFor="event-name" className={classes.label}>Event Name</label>
                        <input type="text" id="event-name" className={classes.input} placeholder='Event Name' />
                    </div>
                    <div className={classes.eventDetails}>
                        <div className={classes.eventDate}>
                            <label htmlFor="event-date" className={classes.label}>Event Date</label>
                            <input type="date" id="event-date" className={classes.input} />
                        </div>
                        <div className={classes.eventTime}>
                            <label htmlFor="event-time" className={classes.label}>Event Time</label>
                            <input type="time" id="event-time" className={classes.input} />
                        </div>
                    </div>
                    <div className={classes.eventVenue}>
                        <label htmlFor="event-location" className={classes.label}>Venue</label>
                        <input type="text" id="event-location" className={classes.input} />
                    </div>
                    <div className={classes.eventCategory}>
                        <label htmlFor="event-description" className={classes.label}>Category</label>
                        <select id="event-description" className={`${classes.select} ${classes.category}`} >
                            <option value="category1">&nbsp;&nbsp;Select Venue</option>
                            <option value="category2">&nbsp;&nbsp;Sports</option>
                            <option value="category3">&nbsp;&nbsp;Music</option>
                            <option value="category4">&nbsp;&nbsp;Dance</option>
                            <option value="category5">&nbsp;&nbsp;Art</option>
                            <option value="category6">&nbsp;&nbsp;Food</option>
                        </select>
                    </div>
                    <div className={classes.eventDescription}>
                        <label htmlFor="event-description" className={classes.label}>Description</label>
                        <textarea id="event-description" className={classes.textarea} placeholder='Write description'/>
                    </div>
                    <NavLink to="/dashboard"><button className={classes.createEventButton}>Create Event</button></NavLink>
                </div>

            </div>
            </div>
     
        </div>
        
       );
}

export default CreateEvent;
