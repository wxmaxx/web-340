/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 16 August 2018
; Description: Advanced Routing
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.3")); 
console.log("\n");

// set the required dependencies
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(req, res) {
    var employeeId = parseInt(req.params.employeeId, 10);

    res.render("index", {
        employeeId: employeeId
    });
});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080");
});