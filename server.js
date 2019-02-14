const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connected to MongoDB
mongoose.connect(db).then(() => console.log('Mongo.DB Connected')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));

const port = process.env.port || 5000;

app.listen(port , () => console.log(`Server running on port ${port}`));