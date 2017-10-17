import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
import '../base'
import './app'

class App extends Component {
  constructor () {
    super()
    this.resetView = this.resetView.bind(this)
  }

  render () {
    return (
      <div id='App' className='hero is-fullheight is-dark is-bold'>
        <Header />
        <Content />
      </div>
    )
  }

  resetView (e) {
    if (e.keyCode !== 27) return
    this.props.history.push({ pathname: '/' })
  }

  componentDidMount () {
    document.addEventListener('keyup', this.resetView)
  }

  componentWillUnmount () {
    document.removeEventListener('keyup', this.resetView)
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(App)
