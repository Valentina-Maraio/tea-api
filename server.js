require('dotenv').config();

const express = require ('express');
const routes = require('./routes/tea'); // import the routes
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})

mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.MONGODB_URI, () => {console.log("Connected to MongoDB")},
    {
        useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
    },
    (err) => {
        if(err) return console.log("Error: ", err);
        console.log("MongoDB Connection --- Ready state is: ", mongoose.connection.readyState);
    }
);