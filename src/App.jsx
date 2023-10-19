import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventDetails from './components/EventDetails';
import axios from 'axios'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import EventList from './components/EventList';
import About from './components/About';
// import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Check if the user is logged in
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Fetch user's calendar events here when logged in

     axios.get('http://localhost:5000/auth/api/calendar-events',{withCredentials:true}).then((response) => {
        return response.data;

     }).then(data=>{
     
      
      setCalendarEvents(data);
     }).catch((err) => {
        console.error(err);
     })

  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/profile',{withCredentials:true});
      // console.log();
      setUser(response.data.user);
      setIsLoggedIn(true);
    } catch(err) {
      console.error(err);
    }
  }
  
  useEffect(()=>{
    getUserDetails();
  },[]);

  


  return (
    <>
    {/*  <ErrorBoundary> */}
   
    <Router >
    <Header user={user} />
      <div className="bg-gray-100 min-h-screen">
        
        <div className="container space-x-3 mx-auto">
         
          <Routes>
            <Route exact path='/' element={isLoggedIn ? <EventList events={calendarEvents}/> :<LandingPage/>} />
            <Route path="/event/:eventId" element={<EventDetails events={calendarEvents}/>} />
            <Route path="/about" element={<About/>} />

            {/* Display event details */}


          </Routes>
        </div>
      </div>
    </Router>
    {/* </ErrorBoundary> */}
     </>
  );
}



export default App;
