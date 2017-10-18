import fetch from 'isomorphic-fetch'
import store from '../store'

export const SESSION = 'SESSION'
export const logIn = (user, pass) => {
  return {
    type: SESSION,
    payload: fetch('/_/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user,
        password: pass
      })
    })
  }
}

export const LOAD_ROUTES = 'LOAD'
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

export const ADD_ROUTE = 'ADD'
export const addRoute = (name, url) => {
  return {
    type: ADD_ROUTE,
    payload: new Promise(resolve => {
      fetch('/_/', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          url: url
        })
      })
    })
  }
}
