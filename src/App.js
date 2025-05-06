import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import CreateEvent from './components/createEvent';
import Events from './components/events';
import GuestList from './components/guestlist';
import Dashboard from './components/dashboard';

import './App.css';
import MyProvider from './MyProvider';




function App() {

  return (
    <MyProvider>
      <Router>
      <div className="App">    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createEvent" element={<CreateEvent />} />
          <Route path="/events" element={<Events />} />
          <Route path="/guestlist" element={<GuestList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      </Router>
    </MyProvider>
  );
}

export default App;
