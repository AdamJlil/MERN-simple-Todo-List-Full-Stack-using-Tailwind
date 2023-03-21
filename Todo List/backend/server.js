require('dotenv').config();

//All requires
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//ROUTER js
const todoRoutes = require('./routes/todo');

//midleware
app.use(express.json());

//use ROUTER JS
app.use('/todo', todoRoutes);


//Connecte Db mongoose using env to protect sensible info
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening in port', process.env.PORT)

        })

    })
    .catch((err) => {
        console.log('err: ', err);
    });
