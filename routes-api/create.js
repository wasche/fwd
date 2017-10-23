exports.route = 'POST /'
exports.authenticated = true
exports.handler = async (ctx, next) => {
  return new Promise(resolve => {
    ctx.db.query(
      `insert into routes (name, url) values ('${ctx.request.body.name}', '${ctx.request.body.url}');`,
      (err, result) => {
        if (err) {
          ctx.badRequest(err.detail)
        } else {
          ctx.body = {
            name: ctx.request.body.name,
            url: ctx.requery.body.url,
            status: 'ok'
          }
        }
        resolve(next())
      }
    )
  })
}
