// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import your routes
const adminRoutes = require('./adminRoutes');


// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Use your routes
app.use('/admin', adminRoutes);

// Define a route handler for the root route ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
