const fs = require('fs')
const __file = require('path').basename(__filename)

exports.install = router => {
  return new Promise((resolve, reject) => {
    // find all routes in the current directory
    fs.readdir(__dirname, (err, files) => {
      if (err) throw err
      files.forEach(f => {
        if (f === __file) return
        let route = require('./' + f)
        let middleware = [route.handler]
        if (route.authenticated) middleware.unshift(require('../middleware/authenticated'))
        router.addRoute(route.route, middleware)
      })
      resolve()
    })
  })
}
