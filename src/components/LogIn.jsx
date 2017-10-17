import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

export default class LogIn extends Component {
  render () {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || {from: { pathname: '/' }}
      return (
        <Redirect to={from} />
      )
    }

    return (
      <form className='logIn container is-fluid' onSubmit={e => e.preventDefault()}>
        <div className='columns is-centered'>
          <div className='column is-narrow'>
            <div className='content has-text-centered'>
              <p>The requested action requires that you log in.</p>
            </div>
            <div className='field'>
              <div className='control has-icons-left'>
                <input className='input' type='text' name='user' placeholder='Username' />
                <span className='icon is-small is-left'>
                  <i className='fa fa-user' />
                </span>
              </div>
            </div>
            <div className='field'>
              <div className='control has-icons-left'>
                <input className='input' type='password' name='pass' placeholder='Password' />
                <span className='icon is-small is-left'>
                  <i className='fa fa-lock' />
                </span>
              </div>
            </div>
            <div className='field is-grouped is-grouped-centered'>
              <div className='control'>
                <button className='button is-success' onClick={this.props.logIn}>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

LogIn.propTypes = {
  logIn: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
}
