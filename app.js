//SERVER SETUP
var express = require('express');
var path = require('path');
var http = require('http');
// var users = require('./routes/users');
var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});
app.get('/main1', function(req, res){
  res.render('main1', {
    title: 'Main1'
  });
});
app.get('/main2', function(req, res){
  res.render('main2', {
    title: 'Main2'
  });
});
app.get('/main3', function(req, res){
  res.render('main3', {
    title: 'Main3'
  });
});
app.get('/login', function(req, res){
  res.render('login', {
    title: 'Login'
  });
});
app.get('/admin', function(req, res){
  res.render('admin', {
    title: 'Admin'
  });
});
// app.all('/admin', requireLogin, function(req, res, next) {
//   next(); // if the middleware allowed us to get here,
//           // just move on to the next route handler
// });

// function requireLogin(req, res, next) {
//   if (false) {
//   	next();
//   } else {
//     // require the user to log in
//     res.redirect("/login"); // or render a form, etc.
//   }
// }
// app.get('/users', users.findAllRecords);
// app.get('/deleteAll', users.delAllRecords);
// app.post('/register', users.addNewUser);
// app.get('/home', function(req, res){
//   res.sendfile('public/views/home.html');
// });
//app.post('/signinadmin', express.bodyParser(), users.findAdminUser);


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

