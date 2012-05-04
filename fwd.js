
var fwd = require('./lib/server')
  , config = require('./config')
  ;

fwd.listen(parseInt(config.port));
