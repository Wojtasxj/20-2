const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Middleware to serve static HTML files
app.use(express.static(path.join(__dirname, 'views')));

// Middleware to handle requests to /user/
app.use('/user', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'forbidden.html'));
});

// Endpoint for home page
app.get(['/', '/home'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Endpoint for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});