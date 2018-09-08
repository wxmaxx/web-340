//set includes
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

//set up express
var app = express();

//set the path view
app.set("views", path.resolve(__dirname, "views"));

//set the view engine to ejs
app.set("view engine", "ejs");
app.use(logger("short"));

//set the response to render the index ejs
app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page"
    });
});

//create the server to run on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
});

