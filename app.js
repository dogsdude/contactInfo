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

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
