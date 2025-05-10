import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import plus from '../assets/plus.png';
import analytics from '../assets/analytics.png';
import dashboard from '../assets/dashboard.png';
import manageevents from '../assets/manageevents.png';
import booking from '../assets/booking.png';
import attendance from '../assets/attendance.png';
import support from '../assets/support.png';
import notifications from '../assets/notifications.png';
import settings from '../assets/settings.png';
import marketing from '../assets/marketing.png';
import categories from '../assets/categories.png';
import manageusers from '../assets/manageusers.png';
import logout from '../assets/logout.png';
import eventaccepted from '../assets/eventaccepted.png';
import profilepic from '../assets/profilepic.png';
import alarmclock from '../assets/alarmclock.png';
import bank from '../assets/bank.png';
import card from '../assets/card.png';
import movieticket from '../assets/movieticket.png';
import transaction from '../assets/transaction.png';
import dancing from '../assets/dancing.png';
import classes from './eventscreen.module.css';
import LineChart from './linechart';
import PieChart from './piechart';
import { _parseObjectDataRadialScale } from 'chart.js/helpers';
import ellipsis from '../assets/ellipsis.png';
import microphone from '../assets/microphone.png';
import pounds from '../assets/pounds.png';
import ticket from '../assets/ticket.png';
import flightseat from '../assets/flightseat.png';
import backarrow from '../assets/backarrow.png';





function EventScreen() {
   
    const events = [
        {
          name: "Music Fiesta",
          venue: "Open Air Theater, Colombo",
          date: "12 April 2025",
          time: "09:00pm to 11:30pm",
          stats: [
            { icon: pounds, value: "5000" },
            { icon: flightseat, value: "2500" },
            { icon: ticket, value: "1800" },
          ],
        },
        {
          name: "Tech Conference",
          venue: "City Hall, London",
          date: "25 May 2025",
          time: "10:00am to 04:00pm",
          stats: [
            { icon: pounds, value: "15000" },
            { icon: flightseat, value: "3000" },
            { icon: ticket, value: "1200" },
          ],
        },
        {
          name: "Art Exhibition",
          venue: "Art Gallery, New York",
          date: "10 June 2025",
          time: "08:00am to 05:00pm",
          stats: [
            { icon: pounds, value: "10000" },
            { icon: flightseat, value: "2000" },
            { icon: ticket, value: "800" },
          ],
        },
        {
          name: "Sports Event",
          venue: "Sports Arena, Dubai",
          date: "15 July 2025",
          time: "02:00pm to 08:00pm",
          stats: [
            { icon: pounds, value: "8000" },
            { icon: flightseat, value: "1000" },
            { icon: ticket, value: "600" },
          ],
        },
        {
          name: "Cultural Festival",
          venue: "Cultural Center, Paris",
          date: "20 August 2025",
          time: "09:00am to 03:00pm",
          stats: [
            { icon: pounds, value: "12000" },
            { icon: flightseat, value: "2000" },
            { icon: ticket, value: "1000" },
          ],
        },
        {
          name: "Fashion Show",
          venue: "Fashion House, Milan",
          date: "05 September 2025",
          time: "11:00am to 04:00pm",
          stats: [
            { icon: pounds, value: "15000" },
            { icon: flightseat, value: "2500" },
            { icon: ticket, value: "1500" },
          ],
        },
        {
          name: "Sports Event",
          venue: "Sports Arena, Dubai",
          date: "15 July 2025",
          time: "02:00pm to 08:00pm",
          stats: [
            { icon: pounds, value: "8000" },
            { icon: flightseat, value: "1000" },
            { icon: ticket, value: "600" },
          ],
        },
        {
          name: "Cultural Festival",
          venue: "Cultural Center, Paris",
          date: "20 August 2025",
          time: "09:00am to 03:00pm",
          stats: [
            { icon: pounds, value: "12000" },
            { icon: flightseat, value: "2000" },
            { icon: ticket, value: "1000" },
          ],
        },
        // Add more events as needed
      ];
      

    return (
        <div className={classes.eventscreen}>
            <div className={classes.sidebar}>
                <p>Planora</p>
                <div className={classes.addEvent}>
                    <img src={plus} alt="" />
                    <div className={classes.addEventText}>
                        <h3>Add Quick Event</h3>
                        <p>Events</p>
                    </div>
                </div>
                <div className={classes.mainNav}>
                    <div className={classes.mainNavText}>
                        <h3>Main Navigation</h3>
                        <span className={classes.dropdown}></span>
                    </div>
                    <NavLink to="/dashboard" className={classes.item}>
                        <img src={dashboard} alt="" />
                        <p>Dashboard</p>
                    </NavLink>
                    <NavLink to="/eventscreen" className={classes.item}>
                        <img src={manageevents} alt="" />
                        <p>Manage Events</p>
                    </NavLink>
                    <NavLink to="" className={classes.item}>
                        <img src={booking} alt="" />
                        <p>Booking & Tickets</p>
                    </NavLink>
                    <NavLink to="/attendanceinsight" className={classes.item}>
                        <img src={attendance} alt="" />
                        <p>Attendee insights</p>
                    </NavLink>
                       
                    <NavLink to="" className={classes.item}>
                        <img src={analytics} alt="" />
                        <p>Analytics & Reports</p>
                    </NavLink>

                </div>
                <div className={classes.support}>
                    <div className={classes.mainNavText}>
                        <h3>Support & Management</h3>
                        <span className={classes.dropdown}></span>
                    </div>
                    <div className={classes.item}>
                        <img src={support} alt="" />
                        <p>Contact Support</p>
                    </div>
                    <div className={classes.item}>
                        <img src={notifications} alt="" />
                        <p>Notifications</p>
                    </div>
                    <div className={classes.item}>
                        <img src={settings} alt="" />
                        <p>Settings</p>
                    </div>

                </div>
                <div className={classes.features}>
                    <div  className={classes.mainNavText}>
                        <h3>Additional Features</h3>
                        <span className={classes.dropdown}></span>
                    </div>
                    <div className={classes.item}>
                        <img src={marketing} alt="" />
                        <p>Marketing</p>
                    </div>
                    <div className={classes.item}>
                        <img src={categories} alt="" />
                        <p>Event Categories</p>
                    </div>

                </div>
                <div className={classes.account}>
                    <div  className={classes.mainNavText}>
                        <h3>Account Management</h3>
                        <span className={classes.dropdown}></span>
                    </div>
                    <div className={classes.item}>
                        <img src={manageusers} alt="" />
                        <p>Manage Users</p>
                    </div>
                    <div className={classes.item}>
                        <img src={logout} alt="" />
                        <p>Logout</p>
                    </div>

                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.eventsection}>
                    <h3>Event Management Section</h3>
                    <div className={classes.firstbarright}>
                        <select>
                            <option value="event">Filter</option>
                            <option value="event1">Up Coming Events</option>
                            <option value="event2">Attended Events</option>
                            <option value="event3">All Events</option>
                        </select>
                        <input type="search" name="query" placeholder="Search..." required></input>
                    </div>
                </div>
                <div className={classes.eventsection}>
                    <div className={classes.secondbar}>
                        <button className={classes.addEventbutton}>
                            <img src={plus} alt="" />
                            <p>New Event</p>
                        </button>
                        <select>
                            <option value="event">Filter</option>
                            <option value="event1">Up Coming Events</option>
                            <option value="event2">Attended Events</option>
                            <option value="event3">All Events</option>
                        </select>
                    </div>
                    <div className={classes.secondbarright}>
                        <div className={classes.sortby}>
                            <p>sort by:</p>
                            <select placeholder="sort boy" className={classes.secondbarselect}>
                                <option value="event">Filter</option>
                                <option value="event1">Up Coming Events</option>
                                <option value="event2">Attended Events</option>
                                <option value="event3">All Events</option>
                            </select>
                        </div>
                      
                        <input type="date" id="date" name="date"></input>
                    </div>
                </div>
                <div className={classes.eventsection}>
                    <span className={classes.eventsectionspan}><span className={classes.eventsectionbullet}></span><p>Upcoming Events</p></span>
                    <span className={classes.eventsectionspan}><span className={classes.eventsectionbullet}></span><p>Pending Events</p></span>
                    <span className={classes.eventsectionspan}><span className={classes.eventsectionbullet}></span><p>Closed Events</p></span>
                </div>
           
                <div className={classes.eventGrid}>
                    {events.map((event, index) => (
                        <div key={index} className={classes.eventCard}>
                        
                        {/* Header */}
                        <div className={classes.eventHeader}>
                            <div className={classes.eventName}>
                                <img src={microphone} alt="" />
                                <p>{event.name}</p>
                            </div>
                            <img src={ellipsis} alt="" />
                        </div>

                        {/* Stats */}
                        <div className={classes.eventStats}>
                            {event.stats.map((stat, i) => (
                            <span key={i} className={classes.eventStat}>
                                <img src={stat.icon} alt="" />
                                <p>{stat.value}</p>
                            </span>
                            ))}
                        </div>

                        {/* Info */}
                        <div className={classes.eventInfo}>
                            <div className={classes.eventdetails}>
                            <h3>Venue</h3>
                            <p>:{event.venue}</p>
                            </div>
                            <div className={classes.eventdetails}>
                            <h3>Date</h3>
                            <p>:{event.date}</p>
                            </div>
                            <div className={classes.eventdetail}>
                                <div className={classes.eventdetails}>
                                    <h3>Time</h3>
                                    <p>:{event.time}</p>
                                </div>
                                <img src={backarrow} alt="" />
                            </div>
                        </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
        
       );
}

export default EventScreen;
