import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Forward from './Forward'
import './footer'

export default class Footer extends Component {
  render () {
    let popular = this.props.routes.items
      .sort((a, b) => { return a.count > b.count ? -1 : b.count > a.count ? 1 : 0 })
      .slice(0, 5)
      .map(r => {
        return (<Forward key={r.id} label={r.name} url={r.url} />)
      })
    let latest = this.props.routes.items
      .sort((a, b) => { return a.id > b.id ? -1 : b.id > a.id ? 1 : 0 })
      .slice(0, 5)
      .map(r => {
        return (<Forward key={r.id} label={r.name} url={r.url} />)
      })
    let recent = this.props.routes.items
      .sort((a, b) => { return a.used > b.used ? -1 : b.used > a.used ? 1 : 0 })
      .slice(0, 5)
      .map(r => {
        return (<Forward key={r.id} label={r.name} url={r.url} />)
      })
    return (
      <footer className='footer columns'>
        <div className='column'>
          <h3>Popular</h3>
          {popular}
        </div>
        <div className='column'>
          <h3>Latest</h3>
          {latest}
        </div>
        <div className='column'>
          <h3>Recent</h3>
          {recent}
        </div>
      </footer>
    )
  }

  componentDidMount () {
    this.props.loadRoutes()
  }
}

Footer.propTypes = {
  routes: PropTypes.object.isRequired,
  loadRoutes: PropTypes.func.isRequired
}
