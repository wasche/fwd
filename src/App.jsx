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
    this.state = {
      view: ''
    }
  }

  render () {
    return (
      <div id='App' className={this.state.view}>
        <Header changeView={this.handleViewChange} />
        <Content />
        <Footer />
      </div>
    )
  }

  handleViewChange (view) {
    this.setState(state => {
      state.view = view
      return state
    })
  }

  resetView (e) {
    if (e.keyCode !== 27) return
    this.setState(state => {
      state.view = ''
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
