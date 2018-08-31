/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: Leon Maxwell
; Modified date: 30 August 2018
; Description: if-else render
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 5.2")); 
console.log("\n");

//require statements
var express = require("express");
var http = require("http");
var path = require("path");

// application functions
var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// add an array names
var nameList = [
    "Bob",
    "Fred",
    "Susan",
    "Becky",
    "Johnny"
];

// set the local routes
app.get('/', function(req, res) {
    res.render('index', {
        names: nameList
    });
});

// create a local server
http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on port 8080');
});