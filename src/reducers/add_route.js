import typeToReducer from 'type-to-reducer'
import { ADD_ROUTE } from '../actions'

export default typeToReducer({
  [ADD_ROUTE]: {
    PENDING: (state) => ({
      ...state,
      loading: true
    }),
    FULFILLED: (state, action) => ({
      loading: false,
      isFullfilled: true
    }),
    REJECTED: (state, action) => ({
      loading: false,
      isRejected: true,
      error: action.payload
    })
  }
}, { loading: false, error: false })
