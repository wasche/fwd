var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , Forward = require('./forward')
  ;

module.exports = new Schema({
    id        : ObjectId
  , name      : { type: String, required: true, unique: true }
  , hosts     : [String]
  , forwards  : [Forward]
});
