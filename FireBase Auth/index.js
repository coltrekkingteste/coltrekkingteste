var http	= require('http');
var fs		= require('fs');
var url		= require('url');
var path	= require('path');
var express = require('express');
var app 	= express();

var index	= 'index.html';
var signout	= 'signout.html';

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, index));
});

app.get("/signout", function(req, res) {
	if(req.url !== "/signout") {
		console.log("SIGNOUT");
		return res.redirect('/signout');
	}
});

app.listen(3000);