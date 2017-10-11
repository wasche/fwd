exports.route = 'GET /'
exports.handler = async (ctx, next) => {
  ctx.body = 'list routes'
  return next()
}
