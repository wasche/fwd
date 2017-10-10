module.exports = async (ctx, route, query, next) => {
  if (!next) {
    next = query
    query = null
  }
  return new Promise((resolve, reject) => {
    if (query) route += '/:query'
    ctx.db.query(
      'select url from routes where name = \'' + route + '\';',
      (err, result) => {
        console.log('forward', route, err || result)
        if (err) ctx.badRequest(err)
        else ctx.redirect(result.rows && result.rows[0].url)
        resolve(next())
      }
    )
  })
}
