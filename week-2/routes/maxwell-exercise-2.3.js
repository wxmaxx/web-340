/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   4 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 08 August 2018
; Description: setting up routes
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 2.3")); 
console.log("\n");

//program begin

//add require statements for express and http
var express = require('express');
var http = require('http');

//create a varible and assign app to the express server
var app = express();

//first route goes to the top directory, which is the homepage
app.get("/", function(req, res) {
    res.end("Welcome to the homepage!");
});

//second route direct user to the about page, one level below homepage
app.get("/about", function(req, res) {
    res.end("Welcome to the about page!");
});

//third route takes user to contact page, also one level below homepage
app.get("/contact", function(req, res) {
    res.end("Welcome to the contact page!");
});

//set up a response that sends an error message if it is not one of the 3 defined routes above
app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404!");
});

http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});



//program end
