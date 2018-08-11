/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   4 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 10 August 2018
; Description: EJS views
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 2.4")); 
console.log("\n");

// set the required dependencies

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

//tells express that the views are in the views directory
app.set("views", path.resolve(__dirname, "views"));

//tell express to use the IJS view engine
app.set("view engine", "ejs");


//define a get response function
app.get("/", function(req, res) {
    res.render("index", {
        firstName: "Leon",
        lastName: "Maxwell",
        address: "17209 Samantha Rd" 
    });
});

//create a local server and log that it is running

http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080");
});

