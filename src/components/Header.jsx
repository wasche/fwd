import React, {Component} from 'react'
import Link from '../containers/Link'
import './header'

export default class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1>fwd</h1>
        <Link view='add' label='Add' />
        <Link view='browse' label='Browse' />
      </header>
    )
  }
}
