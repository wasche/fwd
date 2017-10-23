module.exports = async (ctx, next) => {
  if (ctx.isUnauthenticated()) {
    ctx.throw(401, 'access_denied')
  }
  return next()
}
