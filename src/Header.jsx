import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import './header'

export default class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1>fwd</h1>
        <Link view='add' label='Add' changeView={this.props.changeView} />
        <Link view='browse' label='Browse' changeView={this.props.changeView} />
      </header>
    )
  }
}

Header.propTypes = {
  changeView: PropTypes.func
}
