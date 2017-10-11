const createReadStream = require('fs').createReadStream

exports.route = 'GET /'
exports.handler = async (ctx, next) => {
  ctx.type = 'html'
  ctx.body = createReadStream('./index.html')
  return next()
}
