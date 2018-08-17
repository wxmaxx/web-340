/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   9 December 2017
; Modified By: <Leon Maxwell>
; Modified date: 16 August 2018
; Description: putting it all together
;===========================================
*/ 

// Calls in the header.js file located in the root directory

var header = require('../../header.js');

// Adding header information
console.log(header.display("Leon", "Maxwell", "Exercise 3.4")); 
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

app.get("/", function(req, res) {
    res.render("index", {
        message: "home page"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        message: "about page"
    });
});

app.get("/contact", function(req, res) {
    res.render("contact", {
        message: "contact page"
    });
});

app.get("/products", function(req, res) {
   res.render("products", {
       message: "products page"
   });
});

app.get("/footer", function(req, res) {
   res.render("footer", {
       message: "footer page"
   });
});

app.get("/header", function(req, res) {
   res.render("header", {
       message: "header page"
   });
});

http.createServer(app).listen(8080, function() {
   console.log("Application started on port 8080.");
});