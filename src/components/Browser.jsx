import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './browser'

export default class Browser extends Component {
  constructor () {
    super()
    this.state = { routes: [] }
  }

  render () {
    let routes = this.state.routes.map(r => {
      return (
        <div key={r.id}>
          <span>{r.name}</span>
          <span>{r.url}</span>
          <span>{r.count}</span>
          <span>&nbsp;</span>
        </div>
      )
    })
    return (
      <div className='browser'>
        <header>
          <b>Name</b>
          <b>URL</b>
          <b># uses</b>
          <b>Last Used</b>
        </header>
        <main>
          {routes}
        </main>
        <footer>
          {this.state.routes.length} routes
        </footer>
      </div>
    )
  }

  componentWillUpdate (props, state) {
    if (props.view === 'browse' && !this.state.routes.length) this.props.fetchRoutes()
  }
}

Browser.propTypes = {
  view: PropTypes.string.isRequired,
  fetchRoutes: PropTypes.func.isRequired
}
