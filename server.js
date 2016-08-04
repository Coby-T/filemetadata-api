'use strict';

var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();

app.get('/', function(req, res) {
    res.end("Test");
});

app.post('/size', upload.single('file'), function (req, res) {
   res.json({
       size: req.file.size
   });
});

app.listen(8080, function() {
    console.log('node.js is listening on port 8080.');
});