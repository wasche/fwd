import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import app from './reducers'
import App from './containers/App'

const rootEl = document.getElementById('app-root')

let store = createStore(app)
store.dispatch({ type: 'SET_VIEW', view: 'welcome' })

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App) })
}
