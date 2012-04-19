var ForwardSchema = require('./forward')
  , UserSchema = require('./user')
  ;

module.exports = function(mongoose){
  return {
      Forward : mongoose.model('Forward', ForwardSchema)
    , User    : mongoose.model('User', UserSchema)
  };
};
