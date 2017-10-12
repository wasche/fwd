import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import './app'

export default class App extends Component {
  constructor () {
    super()
    this.handleViewChange = this.handleViewChange.bind(this)
    this.resetView = this.resetView.bind(this)
    this.setLoggedIn = this.setLoggedIn.bind(this)
    this.state = {
      view: 'welcome',
      loggedIn: false,
      requestedView: null
    }
  }

  render () {
    return (
      <div id='App' className={this.state.view}>
        <Header changeView={this.handleViewChange} />
        <Content setLoggedIn={this.setLoggedIn} />
        <Footer />
      </div>
    )
  }

  handleViewChange (view) {
    this.setState(state => {
      state.view = (state.loggedIn && view) || 'log-in'
      state.requestedView = (!state.loggedIn && view) || null
      return state
    })
  }

  setLoggedIn (bool) {
    this.setState(state => {
      state.loggedIn = bool
      if (bool && state.requestedView) {
        state.view = state.requestedView
        state.requestedView = null
      }
      return state
    })
  }

  resetView (e) {
    if (e.keyCode !== 27) return
    this.setState(state => {
      state.view = 'welcome'
      return state
    })
  }

  componentDidMount () {
    document.addEventListener('keyup', this.resetView)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.resetView)
  }
}
