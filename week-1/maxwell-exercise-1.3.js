/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   3 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 03 August 2018
; Description: Url parsing
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 1.3")); 
console.log("\n");

// begin program

var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=maxwell");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program