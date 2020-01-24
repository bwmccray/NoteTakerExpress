//establish our 'required' variables
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');

//establishing express
var app = express();
//establish PORT
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==================================================================================================
//telling the application to return 'index.html' when the path has a '/'
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//telling the application to return 'notes.html' when the path has a '/notes'
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
});


//===================================================================================================
//establishing the server
app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});


