const config = require('./config')
const Koa = require('koa')
const app = new Koa()

app.context.db = require('any-db').createConnection(config.db)

// for parsing form data
app.use(require('koa-body')())

// session management
const session = require('koa-session')
app.keys = config.keys
app.use(session({}, app))

const passport = require('koa-passport')
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

//
app.use(require('koa-respond')())

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
let router = require('./routes')
app.use(router.middleware())

// let api = require('koa-better-router')({ prefix: '/_' }).loadMethods()
// api.get('/', async (ctx, next) => {
//   console.log('GET api /')
//   ctx.body = 'list routes'
//   return next()
// })
// console.dir(api.getRoutes())
app.use(require('./routes-api').middleware())

app.listen(config.port)
console.log('Server started on port ' + config.port)
