/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 22 August 2018
; Description: HTTP Status codes
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.3")); 
console.log("\n");

//set requires
var express = require("express");
var http = require("http");


//start express
var app = express();


//set 404 (not found) status
app.get("/not-found", function(req, res) {
    res.status(404);
    res.json({
        error: "Dude, where's your car?  I don't know dude, where's your car?"
    });
});


//set 200 (OK) status
app.get("/ok", function(req, res) {
    res.status(200);
    res.json({
        message: "Congratulations! This seems to work."
    });
});


//Set 501 (under construction) status
app.get("/not-implemented", function(req, res) {
    res.status(501);
    res.json({
        error: "Page is under construction, please come back next year."
    });
});


//Set 403 (forbidden) status
app.get("/forbidden", function(req, res) {
    res.status(403);
    res.json({
        error: "Page is forbidden, recheck user credentials."
    });
});


//start the server and log that it is running
http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080!");
});