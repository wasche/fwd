exports.route = 'GET /'
exports.handler = async (ctx, next) => {
  ctx.body = 'Hello world!'
  return next()
}
