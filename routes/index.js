var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Calls table to just fill data normally
router.get('/get-data', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var cursor = db.collection('contactInfo').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(err, doc) {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});


//Sorts info by first name alphabetically
//Route is called on "First Name" button click
router.get('/get-first', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var firstSort = {firstName: 1, lastName: 1};
    var cursor = db.collection('contactInfo').find().sort(firstSort);
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(err, doc) {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});

//Sorts info by last name alphabetically
//Route is called on "Last Name" button click
router.get('/get-last', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var lastSort = {lastName: 1, firstName: 1};
    var cursor = db.collection('contactInfo').find().sort(lastSort);
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(err, doc) {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});

//Sorts info by Address alphabetically
//Route is called on "Address" button click
router.get('/get-address', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var addressSort = {streetAddress: 1, lastName: 1, firstName:1};
    var cursor = db.collection('contactInfo').find().sort(addressSort);
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(err, doc) {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});

//Sorts info by Phone Number alphanumerically
//Route is called on "Phone Number" button click
router.get('/get-phoneNumber', function(req, res, next) {
  var resultArray = [];
  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    var numberSort = {phoneNumber: 1, lastName: 1};
    var cursor = db.collection('contactInfo').find().sort(numberSort);
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(err, doc) {
      db.close();
      res.render('index', {items: resultArray});
    });
  });
});



// ./routes/index.js
exports.index = function(req, res){
  res.render('index', { title: 'ejs' });
};

module.exports = router;
