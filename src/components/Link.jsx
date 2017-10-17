import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './header'

export default class Link extends Component {
  render () {
    return (
      <a className='navbar-item' onClick={e => {
        e.preventDefault()
        this.props.changeView(this.props.view, e)
      }}>{this.props.label}</a>
    )
  }
}

Link.propTypes = {
  view: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired
}
