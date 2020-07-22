/*Code by Sam Lindsey, 07/22/2020*/

/*With help from:
 https://www.w3schools.com/
 https://www.youtube.com/watch?v=oT2HOw3fWp4&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=3
 https://developer.mongodb.com/quickstart/node-crud-tutorial#node-tutorial-read
 https://docs.mongodb.com/manual/mongo/
 https://www.youtube.com/watch?v=ZKwrOXl5TDI
 https://makeawebsitehub.com/host-website-computer/
 https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs
 https://github.com/mschwarzmueller/nodejs-basics-tutorial/blob/master/09-mongodb/views/index.hbs
 https://stackoverflow.com/questions/48150072/fetching-data-from-mongodb-and-displaying-on-html
 https://www.thesitewizard.com/css/make-table-cells-same-size.shtml#:~:text=The%20CSS%20to%20make%20all,in%20width%20is%20as%20follows.&text=The%20table%2Dlayout%3A%20fixed%3B,%2C%20if%20you%20have%20them).
 https://www.google.com/search?q=hex+color+picker&oq=hex+color+picker&aqs=chrome..69i57j0l7.2709j0j7&sourceid=chrome&ie=UTF-8
 https://css-tricks.com/snippets/css/centering-a-website/
 https://stackoverflow.com/questions/9114664/spacing-between-elements
 https://www.websitebuilderexpert.com/hosting-websites/
 https://zellwk.com/blog/local-mongodb/#:~:text=To%20connect%20to%20your%20local,databases%20in%20your%20local%20MongoDB.

 And code from:
 https://github.com/mschwarzmueller
 https://www.w3schools.com/howto/howto_js_sort_table.asp
 as well as the default included files that come with an express project in Idea

 */

/*Set up what is needed to run webpage*/
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var mongodb = require('mongodb');
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

//Calls table to just fill data normally
router.get('/get-data', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var cursor = db.collection('contactInfo').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function (err, doc) {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});


//Sorts info by first name alphabetically
//Route is called on "First Name" button click
router.get('/get-first', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var firstSort = {firstName: 1, lastName: 1};
        var cursor = db.collection('contactInfo').find().sort(firstSort);
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function (err, doc) {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});

//Sorts info by last name alphabetically
//Route is called on "Last Name" button click
router.get('/get-last', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var lastSort = {lastName: 1, firstName: 1};
        var cursor = db.collection('contactInfo').find().sort(lastSort);
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function (err, doc) {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});

//Sorts info by Address alphabetically
//Route is called on "Address" button click
router.get('/get-address', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var addressSort = {streetAddress: 1, lastName: 1, firstName: 1};
        var cursor = db.collection('contactInfo').find().sort(addressSort);
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function (err, doc) {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});

//Sorts info by Phone Number alphanumerically
//Route is called on "Phone Number" button click
router.get('/get-phoneNumber', function (req, res, next) {
    var resultArray = [];
    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var numberSort = {phoneNumber: 1, lastName: 1};
        var cursor = db.collection('contactInfo').find().sort(numberSort);
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function (err, doc) {
            db.close();
            res.render('index', {items: resultArray});
        });
    });
});


// ./routes/index.js
exports.index = function (req, res) {
    res.render('index', {title: 'ejs'});
};

module.exports = router;
