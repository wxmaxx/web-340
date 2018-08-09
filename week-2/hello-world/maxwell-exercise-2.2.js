/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   4 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 08 August 2018
; Description: Hello World with express
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 2.2")); 
console.log("\n");

var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
});

http.createServer(app).listen(8080, function()
{
    console.log('Application statred on port %s', 8080);
});