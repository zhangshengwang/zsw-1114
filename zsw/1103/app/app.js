var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var options = {
  root:__dirname + "/public"
};
