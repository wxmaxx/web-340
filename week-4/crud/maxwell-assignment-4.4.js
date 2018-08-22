/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 22 August 2018
; Description: cURL api calls
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.4")); 
console.log("\n");

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});