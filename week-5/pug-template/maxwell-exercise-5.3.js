/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: Leon Maxwell
; Modified date: 01 September 2018
; Description: pug
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 5.3")); 
console.log("\n");

//add includes
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

//define the express application
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//create a route
app.get("/", function(req, res) {
    res.render("index", {
        message: "Pug output to the blank HTML page!"
    });
});

//start the local server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started and running on port 8080.");
});