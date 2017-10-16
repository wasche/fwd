import fetch from 'isomorphic-fetch'
import store from '../store'

export const SET_VIEW = 'SET_VIEW'
export const LOG_IN = 'LOG_IN'

export const LOAD_ROUTES = 'LOAD'

export const changeView = view => {
  return {
    type: SET_VIEW,
    view
  }
}

export const logIn = () => {
  return {
    type: LOG_IN
  }
}

export const loadRoutes = () => {
  return {
    type: LOAD_ROUTES,
    payload: new Promise(resolve => {
      if (!store.getState().routes.items.length) {
        fetch('/_/', { credentials: 'same-origin' })
          .then(res => res.json())
          .then(json => resolve(json))
      }
    })
  }
}
