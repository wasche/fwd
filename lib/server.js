
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , express = require('express')
  , http = require('http')
  , stylus = require('stylus')
  , path = require('path')
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

app.configure(function(){
  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
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
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('./redirector'))
  app.use(app.router);
  // if not redirected or routed, check for redirect typo
  app.locals.use(function(req,res){
    res.locals.version = version;
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('fs').readdirSync(path.join(__dirname, '..', 'routes')).forEach(function(file){
  var route = require(path.join(__dirname, '..', 'routes', file));
  ['get', 'post'].forEach(function(method) {
    if (route[method]) {
      app[method](route.path, route[method]);
    }
  });
});

module.exports = http.createServer(app);
