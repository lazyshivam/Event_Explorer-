// routes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();
const { google } = require('googleapis');
const calendar = google.calendar('v3');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/calendar','email', 'profile'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: process.env.Home_URL,
  }),(req,res)=>{
  
    res.redirect(process.env.Home_URL);
  }
);




router.get('/api/calendar-events',ensureAuthenticated, async(req, res) => {
  try {
    // Set up the Google Calendar API client
    const userAccessToken = req.user.accessToken;

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: userAccessToken });

    // Fetch calendar events
    const calendarEvents = await calendar.events.list({
      auth,
      calendarId: 'primary', // Use the primary calendar
    });

    res.json(calendarEvents.data.items);
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    res.status(500).json({ error: 'Error fetching calendar events' });
  }


});

router.get('/profile',ensureAuthenticated,(req,res)=>{
  // console.log(req.user);
  try {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} catch (err){
    console.error('Error fetching user profile:',err);
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/logout",ensureAuthenticated, (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).json({ error: 'Error logging out' });
    }
    // res.send(`User logged out: ${req.user}`);
    // You can also redirect the user to a different page after logging them out.
    res.redirect(process.env.Home_URL);
  });
});

function ensureAuthenticated(req, res, next) {
  
  if (req.isAuthenticated()) {
   next();
  }
  else{

    res.redirect(process.env.Home_URL); // Redirect unauthenticated users to the login page
  }
}

module.exports = router;
