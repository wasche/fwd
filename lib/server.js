
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('../routes')
  , http = require('http')
  , stylus = require('stylus')
  , path = require('path')
  , config = require('config')
  , mongoose = require('mongoose')
  , app = express()
  , models
  ;

mongoose.connect(config.db);
models = require('../models')(mongoose);

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
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

for (path in routes) {
  if (routes[path].get) {
    app.get(path, routes[path].get);
  }
  if (routes[path].post) {
    app.post(path, routes[path].post);
  }
}

var server = module.exports = http.createServer(app);
