'use strict';

var express = require('express');
var multer = require('multer');
var path = require('path');
var app = express();
var upload = multer();

app.get('/', function(req, res) {
    app.get('/', function(req, res) {
        var guidePath = path.join(__dirname, "index.html");
        res.sendFile(guidePath, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log("Guide sent");
            }
        });
    });
});

app.post('/size', upload.single('file'), function (req, res) {
   res.json({
       size: req.file.size
   });
});

app.listen(8080, function() {
    console.log('node.js is listening on port 8080.');
});