var routes = module.exports = {}
  , home = require('./home')
  , add = require('./add')
  , browse = require('./browse')
  ;

routes[home.path] = {
  get: home.get
};

routes[add.path] = {
  get: add.get
, post: add.post
};

routes[browse.path] = {
  get: browse.get
};
