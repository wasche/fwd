const config = require('./config')
const Koa = require('koa')
const app = new Koa()

app.context.db = require('any-db').createConnection(config.db)

// for parsing form data
const bodyParser = require('koa-body')
app.use(bodyParser())

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

// routing
const Router = require('koa-better-router')
let router = Router().loadMethods()
require('./routes').install(router)
app.use(router.middleware())

let api = Router({ prefix: '_' })
require('./reoutes-api').install(api)
app.use(api.middleware())

app.listen(config.port)
