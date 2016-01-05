define(['jquery', 'backbone'], function($, Backbone){
  'use strict';

  var Forward = Backbone.Model.extend({
    idAttribute: '_id'
  });

  var Forwards = Backbone.Collection.extend({
    url: '/_forwards',
    model: Forward
  });

  var Latest = Backbone.View.extend({

  });

  var App = function(){
    this.el = $('.container .home');
  };

  return {
    initialize: function(){
      new App();
    }
  };

});
