requirejs.config({
  baseUrl: '/javascripts',
  paths: {
    backbone: '/backbone/backbone',
    bootstrap: '/bootstrap/dist/bootstrap',
    jquery: '/jquery/dist/jquery',
    tether: '/tether/dist/js/tether',
    underscore: '/underscore/underscore'
  }
});

requirejs([appName], function(app){
  app.initialize();
});
