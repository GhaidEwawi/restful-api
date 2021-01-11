const express = require ('express');
const mongoose = require ('mongoose');
const UserControl = require('./controllers/UserControl');
const app = express();

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to database...'))
    .catch(err => console.error(err))

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Controllers
const USerController = require('./controllers/UserControl')

// Routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);

// Start Server
app.listen(3000, () => console.log('Server has started on port 3000...'))