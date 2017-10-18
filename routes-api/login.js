exports.route = 'POST /login'
exports.handler = async (ctx, next) => {
  return ctx.passport.authenticate(
    'ldapauth',
    (err, user, info, status) => {
      if (err || user === false) {
        ctx.body = { success: false }
        ctx.throw(401)
      } else {
        ctx.body = { success: true }
        return ctx.login(user)
      }
    }
  )(ctx, next)
}
