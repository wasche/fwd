
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , express = require('express')
  , http = require('http')
  , stylus = require('stylus')
  , path = require('path')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , passport = require('passport')
  , Strategy = require('passport-local').Strategy
  , ensureLogin = require('connect-ensure-login').ensureLoggedIn
  , config = require('../config')
  , version = require('../package').version
  , app
  , models
  , routes
  ;

// passport config
passport.use(new Strategy(
  function(user, pass, fn){
    console.log(user, pass);
    // todo: verify with ldap
    fn(null, {id:user});
  }
));
passport.serializeUser(function(user, fn){
  fn(null, user.id);
});
passport.deserializeUser(function(id, fn){
  fn(null, {id: id});
});

require('express-mongoose');

models = require('../models')(mongoose);

mongoose.connect(config.db);
app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(require('serve-favicon')(path.join(__dirname, '..', '/public/favicon.ico')));
app.use(require('morgan')('combined'));
app.use(stylus.middleware({
    src: path.join(__dirname, '..', 'views')
  , dest: path.join(__dirname, '..', 'public')
  , compile: function(str, path){
    return stylus(str)
      .set('filename', path)
      .set('compress', false)
      .use(require('nib')())
      .import('nib');
  }
}));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'bower_components')))
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(require('cookie-parser')());
app.use(require('express-session')({
  secret: config.session_secret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./redirector'));

app.locals.version = version;
app.locals.hostname = config.hostname;
app.locals.moment = require('moment');

require('fs').readdirSync(path.join(__dirname, '..', 'routes')).forEach(function(file){
  var route = require(path.join(__dirname, '..', 'routes', file));
  ['get', 'post'].forEach(function(method) {
    if (route[method]) {
      if (route.requiresAuth){
        app[method](route.path, ensureLogin('/_login?redirectTo=' + route.path), route[method]);
      } else if (method === 'post' && route.carriesAuth){
        app[method](
          route.path,
          passport.authenticate('local', { failureRedirect: '/_login' }),
          route[method]
        );
      } else {
        app[method](route.path, route[method]);
      }
    }
  });
});

if ('development' == app.get('env')) {
  app.use(require('errorhandler'));
}

module.exports = app;
