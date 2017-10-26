import fetch from 'isomorphic-fetch'
import store from '../store'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    return response.json()
      .then(r => r.detail)
      .then(r => Promise.reject(r))
  }
}

export const SESSION = 'SESSION'
export const getSession = () => {
  return {
    type: SESSION,
    payload: fetch('/_/session', {
      credentials: 'same-origin'
    })
      .then(checkStatus)
      .then(res => res.json())
  }
}
export const LOGIN = 'LOGIN'
export const logIn = (user, pass) => {
  return {
    type: LOGIN,
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
      .then(checkStatus)
  }
}

export const LOAD_ROUTES = 'LOAD'
export const loadRoutes = () => {
  return {
    type: LOAD_ROUTES,
    payload: new Promise(resolve => {
      if (!store.getState().routes.items.length) {
        fetch('/_/', { credentials: 'same-origin' })
          .then(checkStatus)
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
    payload: fetch('/_/', {
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
      .then(checkStatus)
  }
}

export const SEARCH = 'SEARCH'
export const search = (query) => {
  return {
    type: SEARCH,
    payload: fetch(`/_/${query}`, { credentials: 'same-origin' })
      .then(checkStatus)
      .then(res => res.json())
  }
}
