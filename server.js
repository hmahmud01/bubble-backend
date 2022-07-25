var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/index.js');
routes(app);

app.listen(port);

console.log('app is running on: ' + port);