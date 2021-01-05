const express = require ('express');
const mongoose = require ('mongoose');
const app = express();

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to database...'))
    .catch(err => console.error(err))

// Middleware

// Controllers

// Routes

// Start Server