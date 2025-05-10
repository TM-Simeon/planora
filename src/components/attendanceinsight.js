import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
import classes from './attendanceinsight.module.css';
import LineChart from './linechart';
import PieChart from './piechart';
import { _parseObjectDataRadialScale } from 'chart.js/helpers';
import ellipsis from '../assets/ellipsis.png';
import microphone from '../assets/microphone.png';
import pounds from '../assets/pounds.png';
import ticket from '../assets/ticket.png';
import flightseat from '../assets/flightseat.png';
import backarrow from '../assets/backarrow.png';
import AttendeeAgeChart from './attendancechart';
import AttendeeInterestChart from './attendeeinterestchart';
import AttendeeLocationsChart from './attendeelocationchart';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';





function Attendanceinsight() {
   
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
                    <h3>Attendee insights - Leads Music Festival 2025</h3>
                    <div className={classes.firstbarright}>
                        <input type="search" name="query" placeholder="Search..." required></input>
                    </div>
                </div>
                <div className={classes.eventsection}>
                    <div className={classes.secondbar}>
                        <div className={classes.secondbarleft}>
                            <span className={classes.dot}></span>
                            <h3>Event Venue: Open Air Theater Leeds</h3>
                        </div>
                        <div className={classes.secondbarleft}>
                            <span className={classes.dot}></span>
                            <h3>Event Date: April 12, 2025</h3>
                        </div>
                        <div className={classes.secondbarleft}>
                            <span className={classes.dot}></span>
                            <h3>Event Time: 6:00PM - 10:30PM</h3>
                        </div>
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
                   <div className={classes.attendeecharts}>
                        <div className={classes.attendeeage}>
                            <AttendeeAgeChart />
                        </div>
                        <div className={classes.othercharts}>
                            <div className={classes.attendeeinterest}>
                                <AttendeeInterestChart />
                            </div>
                            <div className={classes.attendeelocation}>
                                <AttendeeLocationsChart />
                            </div>
                        </div>
                   </div>
                   <div>
                        <div className={classes.attendeesocial}>
                            <h2>Engagement & Social Media Reach</h2>
                            <p>How attendees engaged with the event</p>
                            <div className={classes.engagement}>
                                <div  className={classes.engagementpic}>
                                    <img src={instagram} alt="Engagement"/>
                                    <p>Instagram Mentions</p>
                                </div>
                                <p>5,200</p>
                            </div>
                            <div className={classes.engagement}>
                                <div  className={classes.engagementpic}>
                                    <img src={facebook} alt="Engagement"/>
                                    <p>Facebook Shares</p>
                                </div>
                                <p>3,800</p>
                            </div>
                            <div className={classes.engagement}>
                                <div  className={classes.engagementpic}>
                                    <img src={twitter} alt="Engagement"/>
                                    <p>Twitter Tweets </p>
                                </div>
                                <p>1,200</p>
                            </div>
                            <div className={classes.engagement}>
                                <div  className={classes.engagementpic}>
                                    <img src={instagram} alt="Engagement"/>
                                    <p>Event Check-ins (QR scans)</p>
                                </div>
                                <p>9,500</p>
                            </div>
                            <div>TOTAL COUNT: 19,700</div>
                        </div>
                        <div>

                        </div>
                   </div>
                </div>
           
           

            </div>
        </div>
        
       );
}

export default Attendanceinsight;
