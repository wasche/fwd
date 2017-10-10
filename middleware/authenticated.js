module.exports = ctx => {
  if (ctx.isUnauthenticated()) {
    ctx.throw(401, 'access_denied')
  }
}
