// declare all the things we need
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configures all environment variables in a .env file
require('dotenv').config();

// creates Express server and port
const app = express();
const port = process.env.PORT || 5000;

// creates CORS middleware and allows for parsing JSON since server will be receiving and sending JSON objects
app.use(cors());
app.use(express.json());

// connect to the MongoDB Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, err => {
    if(err) console.log(err);
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

// Define routes for CRUD operations
const recordsRouter = require('./routes/records');
const patientsRouter = require('./routes/patients');

// Use routers
app.use('/records', recordsRouter);
app.use('/patients', patientsRouter);

// starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})