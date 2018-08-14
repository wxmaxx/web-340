/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 13 August 2018
; Description: EJS views
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.2")); 
console.log("\n");

// set the required dependencies
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//assign express to the variable app
var app = express();

//point express to the views folder
app.set("views", path.resolve(__dirname, "views"));

//allow express to use ejs to view the html/ejs code
app.set("view engine", "ejs");

//assign morgan as the logger and set the output view to short
app.use(logger("short"));

//set up the request/response function
app.get("/", function(req, res) {
    res.render("index", {
        message: "Morgan logging 101!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application server started on port 8080");
});