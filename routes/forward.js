exports.route = 'GET /:route/:query?'
exports.handler = async (ctx, next) => {
  if (['_', 'favicon.ico'].indexOf(ctx.params.route) >= 0) return next()
  return new Promise((resolve, reject) => {
    let num = /^([^\d]+)(\d+)$/.exec(ctx.params.route)
    if (num) {
      ctx.params.route = num[1] + '{NUM}'
      num = num[2]
    }
    if (ctx.params.query) ctx.params.route += '/{QUERY}'
    ctx.db.query(
      'select url from routes where name = \'' + ctx.params.route + '\';',
      (err, result) => {
        if (err) ctx.badRequest(err)
        else if (result.rows && result.rows.length) ctx.redirect(result.rows[0].url)
        else console.error('Unknown redirect:', ctx.params)
        resolve(next())
      }
    )
  })
}
