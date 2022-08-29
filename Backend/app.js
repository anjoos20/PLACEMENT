const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const  cors = require('cors');

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

// Import Routes
const employerRoute = require('./routes/employer')
const jobRoute = require('./routes/job')
const student = require("./routes/student")

app.use('/employer/',employerRoute)
app.use('/job/',jobRoute)
app.use("/student",student);


const port=process.env.PORT||3000;
// Connect to db
mongoose.connect(process.env.dbUrl, {useNewUrlParser: true}, () =>
    console.log('Connected to DB!')
);
// Server
app.listen(port,() => {
    console.log('Server starts at :'+port);  
});