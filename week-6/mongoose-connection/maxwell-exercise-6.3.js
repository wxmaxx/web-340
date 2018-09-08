/*
============================================
; Title:  Mongoose connection
; Author: Professor Krasso 
; Date:   11 December 2017
; Modified By: Leon Maxwell
; Modified date: 8 September 2018
; Description: connecting the Mongo DB with Mongoose
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 6.3")); 
console.log("\n");

//require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// connection string for the database
var mongoDB = "mongodb://admin:admin1@ds141932.mlab.com:41932/ems";
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

//set the application
var app = express();
//set the logger
app.use(logger("short"));


// create the server
http.createServer(app).listen(8080, function() {
    console.log("Application connected to port 8080!");
});