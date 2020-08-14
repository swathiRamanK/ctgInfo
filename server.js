const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const MongoClient = require('mongodb').MongoClient;
const uri = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const cors = require('cors');
var app = express();
app.use(cors());

// Bodyparser middleware --TODO
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


// connect to mongo db


// DB Config
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
mongoose.connect(uri,options).then(
  ()=>{
    console.log("connected to mongoDB")},
 (err)=>{
     console.log("err",err);
});





// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


app.listen(4000, () => {
    console.log('listening in port');
});