import React, {Component} from 'react'
import { NavLink as Link } from 'react-router-dom'
import './header'

export default class Header extends Component {
  render () {
    return (
      <header className='hero-head'>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <div className='navbar-item'>fwd</div>
          </div>
          <div className='navbar-menu is-active'>
            <div className='navbar-start' />
            <div className='navbar-end'>
              <Link to='/' exact className='navbar-item' activeClassName='is-active'>Home</Link>
              <Link to='/add' exact className='navbar-item' activeClassName='is-active'>Add</Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
