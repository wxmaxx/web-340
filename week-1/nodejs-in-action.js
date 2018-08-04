/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   3 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 03 August 2018
; Description: Hello World Server
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 1.3")); 
console.log("\n");

// begin program

var http = require("http");

function processRequest(req, res) {
    var body = "This is my Web Server!";

    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);

// end program