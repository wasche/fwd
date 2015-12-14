
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
  , config = require('../config')
  , version = require('../package').version
  , app
  , models
  , routes
  ;

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
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(require('./redirector'))

app.locals.version = version;
app.locals.hostname = config.hostname;

require('fs').readdirSync(path.join(__dirname, '..', 'routes')).forEach(function(file){
  var route = require(path.join(__dirname, '..', 'routes', file));
  ['get', 'post'].forEach(function(method) {
    if (route[method]) {
      app[method](route.path, route[method]);
    }
  });
});

if ('development' == app.get('env')) {
  app.use(require('errorhandler'));
}

module.exports = app;
