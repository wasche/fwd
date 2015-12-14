var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , Forward
  ;

Forward = module.exports = new Schema({
    name      : { type: String,   required: true, unique: true }
  , target    : { type: String,   required: true    }
  , dynamic   : { type: Boolean,  default: false    }
  , created   : { type: Date,     default: Date.now }
  , updated   : { type: Date,     default: Date.now }
  , accessed  : { type: Date,     default: null     }
  , uses      : { type: Number,   default: 0        }
  , note      : { type: String,   default: null     }
});

Forward.methods.touch = function touch(callback){
  this.accessed = new Date();
  this.uses = this.uses + 1;
  return this.save(callback);
};

Forward.statics.getLatest = function getLatest(callback){
  return this.find().sort({updated: -1}).limit(5).exec(callback);
};

Forward.statics.getPopular = function getPopular(callback){
  return this.find().sort({uses: -1}).limit(5).exec(callback);
};

Forward.statics.getRecent = function getRecent(callback){
  return this.find().sort({accessed: -1}).limit(5).exec(callback);
};
