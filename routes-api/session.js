exports.route = 'GET /session'
exports.handler = async (ctx, next) => {
  ctx.body = { loggedIn: ctx.isAuthenticated() }
  return next()
}
