import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Forward extends Component {
  render () {
    return (
      <a href={this.props.url}>{this.props.label}</a>
    )
  }
}

Forward.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
