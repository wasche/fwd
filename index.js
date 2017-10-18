const config = require('./config')
const Koa = require('koa')
const app = new Koa()

const DEFAULT_PORT = 80
const DEFAULT_SSL_PORT = 443

// context settings
app.context.db = require('any-db').createConnection(config.db)

// for parsing form data
app.use(require('koa-body')())

// session management
const session = require('koa-session')
app.keys = config.keys
app.use(session({}, app))

const passport = app.context.passport = require('koa-passport')
const Strategy = require('passport-ldapauth')
passport.use(new Strategy({
  server: config.ldap
}, function (user, fn) {
  fn(null, {id: user.uid})
}))
passport.serializeUser(function (user, fn) {
  fn(null, user.id)
})
passport.deserializeUser(function (id, fn) {
  fn(null, {id: id})
})
app.use(passport.initialize())
app.use(passport.session())

// helpers
app.use(require('koa-respond')())

// webpack
app.use(require('koa-webpack')())

// logging
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  console.log(`${ctx.status} ${ctx.method} ${ctx.url} - ${ms}`)
})
app.on('error', (err, ctx) => {
  console.log('error', err)
})

// routing
app.use(require('./routes').middleware())
app.use(require('./routes-api').middleware())

// start
require('http').createServer(app.callback()).listen(config.port || DEFAULT_PORT)
if (config.ssl) {
  app.use(require('koa-sslify')({ port: config.ssl.port || DEFAULT_SSL_PORT }))
  const fs = require('fs')
  require('https').createServer({
    key: fs.readFileSync(config.ssl.key),
    cert: fs.readFileSync(config.ssl.cert)
  }, app.callback()).listen(config.ssl.port || DEFAULT_SSL_PORT)
}
console.log('Server started on port ', config.port || DEFAULT_PORT)
