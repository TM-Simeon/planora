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
import not from '../assets/not.png';
import filter from '../assets/filter.png';
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
import classes from './dashboard.module.css';
import LineChart from './linechart';
import PieChart from './piechart';
import { _parseObjectDataRadialScale } from 'chart.js/helpers';





function Dashboard() {
    const upcomingEvents = [
        {
            id: 1,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th 2025',
            image: profilepic,
        },
        {
            id: 2,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th 2025',
            image: profilepic,
        },
        {
            id: 3,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th 2025',
            image: profilepic,
        },
        {
            id: 4,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th 2025',
            image: profilepic,
        },
        {
            id: 5,
            title: 'African Food Festival',
            location: 'Kent, United Kingdom',
            date: 'April 26th 2025',
            image: profilepic,
        }
    ]
    const notificationsData = [
        {
            id: 1,
            title: 'African Food Festival',
            message: 'Paycheck released for artists @planora Event',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: card,
        },
        {
            id: 2,
            title: 'African Food Festival',
            message: 'Total revenue has been transferred to bank',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: bank,
        },
        {
            id: 3,
            title: 'African Food Festival',
            message: '@Hauwa event in 3 days',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: alarmclock,
        },
        {
            id: 4,
            title: 'African Food Festival',
            message: 'Paycheck released for artists @Hauwa Event',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: card,
        },
        {
            id: 5,
            title: 'African Food Festival',
            message: 'Paycheck released for artists @Hauwa Event',
            date: 'April 26th10:00 AM - 12:00 PM',
            image: card,
        }
    ]
    const eventsData = 
        {
           jan_2025:[
                {
                    id: 1,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 2,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 3,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 4,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 5,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                }
            ],
           feb_2025:[
                {
                    id: 1,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 2,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 3,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 4,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 5,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                },
                {
                    id: 6,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                }
            ],
            mar_2025:[
                {
                    id: 1,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                },
                {
                    id: 2,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 3,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 4,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 5,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 6,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                },
                {
                    id: 7,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                },
                {
                    id: 8,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                }
            ],
            apr_2025:[
                {
                    id: 1,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 2,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 3,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 4,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "pending",
                },
                {
                    id: 5,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                },
                {
                    id: 6,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "undone",
                },
                {
                    id: 7,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                },
                {
                    id: 8,
                    title: 'African Food Festival',
                    location: 'Kent, United Kingdom',
                    date: 'April 26th 2025',
                    status: "done",
                }
            ]
        }
           
    

    return (
        <div className={classes.dashboard}>
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
                        <NavLink to="/" className={classes.item}><p>Logout</p></NavLink>
                    </div>

                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.contentbar}>
                    <div className={classes.contentbarTitle}>
                        <img src={profilepic} alt="" className={classes.addEventIcon} />
                        <div className={classes.contentbarTitleText}>
                            <h3>Welcome Back, Hauwa</h3>
                            <p>system Administrator</p>
                        </div>
                    </div>
                   <div className={classes.searchContainer}>
                        <input type="text" placeholder="Search" className={classes.search} />
                        <img src={not} alt="" className={classes.searchnotifications} />
                        <img src={eventaccepted} alt="" className={classes.eventaccepted} />
                   </div>
                  
                </div>
                <div className={classes.mainContent}>
                    <div className={classes.mainContentMain}>
                        <div className={classes.highlights}>
                            <NavLink to="/eventscreen" className={classes.highlight}>
                                
                            {/* <div className={classes.highlight} > */}
                                <img src={dancing} alt="" className={classes.analytics} />
                                <div className={classes.highlightText}>
                                    <p>Events</p>
                                    <h3 className={classes.highlightevents}>28 Events</h3>
                                </div>

                            {/* </div> */}
                            </NavLink>

                            <div className={classes.highlight}>
                                <img src={movieticket} alt="" className={classes.analytics} />
                                <div className={classes.highlightText}>
                                    <p>Bookings</p>
                                    <h3 className={classes.bookings}>2,7598</h3>
                                </div>
                            </div>
                            <div className={classes.highlight}>
                                <img src={transaction} alt="" className={classes.analytics} />
                                <div className={classes.highlightText}>
                                    <p>Revenue</p>
                                    <h3 className={classes.revenue}>&pound; 5,000,000</h3>
                                </div>
                            </div>
                        </div>
                        <div className={classes.chartanalytics}>
                            <div className={classes.linechart}>
                                <div>
                                    <div className={classes.linechartTitle}>
                                        <div className={classes.linechartnetsales}>
                                            <h2>Net Sales</h2>
                                            <span className={classes.netsalesdropdown}></span>
                                        </div>
                                        <div className={classes.linechartfilter}>
                                            <div className={classes.filterimg}>
                                                <img src={filter} alt=""/>
                                                <p>Filter</p>
                                            </div>
                                            <p>Weekly</p>
                                        </div>
                                    </div>
                                    <div className={classes.linechartnumbers}>
                                        <span className={classes.linechartnumber}>
                                            <p>Total Revenue</p>
                                            <h3>&pound; 40,000,000</h3>
                                        </span>
                                        <span  className={classes.linechartnumber}>
                                            <p>Total Tickets</p>
                                            <h3>&pound; 2438 Tickets</h3>
                                        </span>
                                        <span  className={classes.linechartnumber}>
                                            <p>Total Events</p>
                                            <h3>&pound; 32 Events</h3>
                                        </span>
                                    </div>
                                </div>
                                <LineChart />
                            </div>
                            <div className={classes.doughnutchart}>
                                <div className={classes.doughnutchartTitle}>
                                    <h2>Customer <br></br>
                                    Engagement</h2>
                                </div>
                                <PieChart />

                            </div>
                        </div>
                        <div className={classes.latestEventsContainer}>
                            <div className={classes.latestEvents}>
                                <h2>Latest Event</h2>
                                <p>Event Name:</p>
                                <h3>Tech Innovation EDM Festival</h3>
                                <p>Event Date:</p>
                                <h3>30 April 2025</h3>
                                <div>
                                    <div className={classes.bulletpoints}>
                                        <div className={classes.bulletpoint}></div>
                                        <p>Paid Seats</p>
                                    </div>
                                    <div className={classes.bulletpoints}>
                                        <div className={classes.bulletpoint}></div>
                                        <p>Reserved Seats</p>
                                    </div>
                                    <div className={classes.bulletpoints}>
                                        <div className={classes.bulletpoint}></div>
                                        <p>To be sold</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.boxes}>
                            {/* {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index}>Container {index + 1}</div>
                            ))} */}
                            {Object.entries(eventsData).map(([month, events]) => (
                                <div key={month} className={classes.eventContainer}>
                                    {/* <h3>{month}</h3> */}
                                    {events.map((event) => (
                                        <div key={event.id} 
                                        className={`${classes[event.status]} ${classes.eventbox}`}
                                        >
                                            {/* <img src={event.image} alt="" className={classes.eventImage} /> */}
                                            {/* <div className={classes.eventDetails}>
                                                <h4>event: {event.title}</h4>
                                                <p>Date: {event.date}</p>
                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                            ))}

                            </div>
                        </div>
                    </div>
                    <div className={classes.mainContentSidebar}>
                        <div className={classes.events}>
                            <h3>Upcoming Events</h3>
                            {upcomingEvents.map((event) => (
                                <div className={classes.event}>
                                    <img src={event.image} alt="" className={classes.eventImage} />
                                    <div className={classes.eventDetails}>
                                        <h4>event: {event.title}</h4>
                                        <p>Date: {event.date}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className={classes.notifications}>
                            <h3>notification</h3>
                            <hr></hr>

                            {notificationsData.map((notification) => (
                                <div >
                                    <div className={classes.notification}>
                                        <img src={notification.image} alt="" className={classes.notificationImage} />
                                        <div className={classes.notificationDetails}>
                                            <h4>{notification.message}</h4>
                                        </div>
                                    </div>
                                    
                                    <hr></hr>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </div>
        
       );
}

export default Dashboard;
