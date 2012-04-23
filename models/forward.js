var mongoose = require('mongoose')
  , Promise = mongoose.Promise
  , Schema = mongoose.Schema
  , Forward
  ;

Forward = module.exports = new Schema({
    name      : { type: String,   required: true    }
  , target    : { type: String,   required: true    }
  , dynamic   : { type: Boolean,  default: false    }
  , created   : { type: Date,     default: Date.now }
  , updated   : { type: Date,     default: Date.now }
  , accessed  : { type: Date,     default: null     }
  , uses      : { type: Number,   default: 0        }
});

Forward.methods.touch = function touch(callback){
  this.accessed = new Date();
  this.uses = this.uses + 1;
  return this.save(callback);
};

Forward.statics.getLatest = function getLatest(callback){
  return this.find().desc('updated').limit(5).run(callback);
};

Forward.statics.getPopular = function getPopular(callback){
  return this.find().desc('uses').limit(5).run(callback);
};

Forward.statics.getRecent = function getRecent(callback){
  return this.find().desc('accessed').limit(5).run(callback);
};
