var routes = module.exports = {}
  , home = require('./home')
  ;

routes[home.path] = {
  get: home.get
}
