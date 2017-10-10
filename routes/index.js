const router = require('koa-route')

module.exports = app => {
  app.use(router.get('/', require('./root')))
  app.use(router.get('/:route', require('./forward')))
  app.use(router.get('/:route/:query', require('./forward')))
}
