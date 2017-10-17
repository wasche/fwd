import { combineReducers } from 'redux'
import session from './session'
import routes from './load_routes'
import add from './add_route'

export default combineReducers({
  session,
  routes,
  add
})
