exports.route = 'GET /'
exports.handler = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    ctx.db.query(
      'select * from routes',
      (err, result) => {
        if (err) ctx.badRequest(err)
        ctx.body = result.rows
          .map(row => {
            return { id: row.id, name: row.name, url: row.url, count: row.count, used: row.used }
          })
        resolve(next())
      }
    )
  })
}
