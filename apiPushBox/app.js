/*Server*/
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

// Connection To DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models = require('./models/data')(app, mongoose);

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});
app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});