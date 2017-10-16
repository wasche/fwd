import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './logIn'

export default class LogIn extends Component {
  render () {
    return (
      <form className='logIn' onSubmit={e => e.preventDefault()}>
        <p>The requested action requires that you log in.</p>
        <div role='group'>
          <input type='text' name='user' placeholder='Username' />
          <input type='password' name='pass' placeholder='Password' />
          <button onClick={this.props.logIn}>Log In</button>
        </div>
      </form>
    )
  }
}

LogIn.propTypes = {
  logIn: PropTypes.func.isRequired
}
