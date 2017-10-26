exports.route = 'GET /:query'
exports.handler = async (ctx, next) => {
  return new Promise((resolve, reject) => {
    ctx.db.query(
      `select * from routes where name like '%${ctx.params.query}%'`,
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
