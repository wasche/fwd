const config = require('./config')
const db = require('any-db').createConnection(config.db)

async function save (name, url, count) {
  return new Promise((resolve, reject) => {
    let sql = `insert into routes (name, url, count) values ('${name}', '${url}', ${count});`
    console.log(sql)
    db.query(
      sql,
      (err, result) => {
        if (err) reject(err)
        else resolve()
      }
    )
  })
}

require('http').get(process.argv[2], res => {
  res.setEncoding('utf-8')
  let data = ''
  let seen = new Set()
  res.on('data', chunk => { data += chunk })
  res.on('end', async () => {
    // <tr class="editable"><td><a href="https://jira.tripadvisor.com/">jira</a></td><td>1039</td>
    const re = /<tr class="editable"><td><a href="(https?:\/\/[^"]+)">([\w\d{}/]+)<\/a><\/td><td>(\d+)<\/td>/g
    let m
    while ((m = re.exec(data))) {
      let [url, name, count] = m.slice(1)
      // exclude unused routes
      if (count == 0) continue // eslint-disable-line eqeqeq
      // exclude invalid routes
      if (name.indexOf('{QUERY}') > 0 && name.indexOf('/{QUERY}') < 0) continue
      // exclude duplicate routes
      if (seen.has(name)) continue
      // some invalid urls are correctable
      if (/^([^,]+),\1$/.test(url)) url = url.split(',')[0]
      // but not all
      if (url.indexOf(',') > 0) continue

      url = url.replace('\'', '%27')

      try {
        await save(name, url, count)
      } catch (err) {
        console.error(err)
      }
      seen.add(name)
    }
    console.log(`${seen.size} valid routes.`)
    db.end()
  })
})
