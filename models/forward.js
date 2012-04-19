var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  ;

module.exports = new Schema({
    name    : String
  , target  : String
  , created : { type: Date, default: Date.now }
  , updated : { type: Date, default: Date.now }
  , meta    : {
      uses  : Number
    , favs  : Number
  }
});
