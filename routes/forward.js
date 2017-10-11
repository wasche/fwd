exports.route = 'GET /:route/:query?'
exports.handler = async (ctx, next) => {
  if (ctx.params.route === '_') return next()
  return new Promise((resolve, reject) => {
    if (ctx.params.query) ctx.params.route += '/:query'
    ctx.db.query(
      'select url from routes where name = \'' + ctx.params.route + '\';',
      (err, result) => {
        console.log('forward', ctx.params.route, err || result)
        if (err) ctx.badRequest(err)
        else ctx.redirect(result.rows && result.rows[0].url)
        resolve(next())
      }
    )
  })
}
