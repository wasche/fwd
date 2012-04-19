var mongoose = require('mongoose')
  , Promise = mongoose.Promise
  , Schema = mongoose.Schema
  , Forward
  ;

Forward = module.exports = new Schema({
    name    : String
  , target  : String
  , created : { type: Date, default: Date.now }
  , updated : { type: Date, default: Date.now }
  , accessed : { type: Date, default: null }
  , meta    : {
      uses  : Number
    , favs  : Number
  }
});

Forward.statics.getLatest = function(callback){
  return this.find().where('updated').sort('updated', 1).run(callback);
};
