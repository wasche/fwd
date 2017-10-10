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
require('./routes')(app)
// const router = require('koa-route')
// app.use(router.get('/', (ctx) => {
//   ctx.body = 'Hello world!'
// }))
// app.use(router.get('/:route', (ctx, route) => {
//   console.log('simple', route)
// }))
// app.use(router.get('/:route/:query', (ctx, route, query) => {
//   console.log('query', route, query)
// }))
// const Router = require('koa-better-router')
// let router = Router()
// require('./routes').install(router)
// router.get('/', (ctx, next) => {
//   ctx.body = 'Hello world!'
//   return next()
// })
// console.dir(router.getRoutes())
// app.use(router.middleware())

// let api = Router({ prefix: '_' })
// let loaderApi = require('./routes-api').install(api)
// console.dir(api.getRoutes())
// app.use(api.middleware())

app.listen(config.port)
console.log('Server started on port ' + config.port)
