import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from '../containers/Footer'
import Content from './Content'
import '../base'
import './app'

export default class App extends Component {
  constructor () {
    super()
    this.resetView = this.resetView.bind(this)
  }

  render () {
    return (
      <div id='App' className={this.props.view}>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }

  resetView (e) {
    if (e.keyCode !== 27) return
    this.props.resetView()
  }

  componentDidMount () {
    document.addEventListener('keyup', this.resetView)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.resetView)
  }
}

App.propTypes = {
  view: PropTypes.string.isRequired,
  resetView: PropTypes.func.isRequired
}
