exports.route = 'POST /new'
exports.authenticated = true
exports.handler = async (ctx, next) => {
  console.log(ctx.request)
  return next()
}
