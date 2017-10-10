const fs = require('fs')

exports.install = router => {
  // find all routes in the current directory
  fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    files.forEach(f => {
      let route = require('./' + f)
      let middleware = [route.handler]
      if (route.authenticated) middleware.unshift(require('../middleware/authenticated'))
      router.addRoute(route.route, middleware)
    })
  })
}
