
var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
	res.send('hello express.js')     
})

app.listen(8080);

