import typeToReducer from 'type-to-reducer'
import { SEARCH } from '../actions'

export default typeToReducer({
  [SEARCH]: {
    PENDING: (state) => ({
      ...state,
      loading: true
    }),
    FULFILLED: (state, action) => ({
      loading: false,
      routes: action.payload
    }),
    REJECTED: (state, action) => ({
      loading: false,
      error: action.payload
    })
  }
}, { loading: false, error: false, routes: [] })
