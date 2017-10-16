import typeToReducer from 'type-to-reducer'
import { LOAD_ROUTES } from '../actions'

export default typeToReducer({
  [LOAD_ROUTES]: {
    PENDING: (state) => ({
      ...state,
      loading: true
    }),
    FULFILLED: (state, action) => ({
      loading: false,
      isFullfilled: true,
      items: action.payload
    }),
    REJECTED: (state, action) => ({
      loading: false,
      isRejected: true,
      error: action.payload
    })
  }
}, { loading: false, items: [], error: false })
