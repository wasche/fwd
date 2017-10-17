import { combineReducers } from 'redux'
import session from './session'
import routes from './routes'

export default combineReducers({
  session,
  routes
})
