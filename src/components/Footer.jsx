import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './footer'

export default class Footer extends Component {
  render () {
    let popular = this.props.routes.items
      .sort((a, b) => { return a.count > b.count ? 1 : b.count > a ? -1 : 0 })
      .map(r => {
        return (<span key={r.id}>{r.name}</span>)
      })
      .slice(0, 5)
    return (
      <footer className='footer'>
        <dl>
          <dt>Popular</dt>
          <div>
            {popular}
          </div>
        </dl>
        <dl>
          <dt>Latest</dt>
          <div>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </div>
        </dl>
        <dl>
          <dt>Recent</dt>
          <div>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </div>
        </dl>
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
