/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 22 August 2018
; Description: Advanced Routing
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 4.2")); 
console.log("\n");

//set requires
var express = require("express");
var http = require("http");
var logger = require('morgan');


//start express
var app = express();

app.use(logger('dev'));


//make a request to retrieve customer ID
app.get("/customer/:id", function (req, res) {
	var id = parseInt(request.params.id, 10);

  response.json({
        firstName: "Leon",
        lastName: "Maxwell",
        middleName: "E",
    	//links to the var id
        employeeId: id
    });
});

//start the server and log a response to ensure it is running
http.createServer(app).listen(3000, function() {
    console.log("Application started on port 3000");
});

