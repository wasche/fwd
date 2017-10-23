import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

export default class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

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
                <input className='input' type='text' autoFocus
                  name='username'
                  placeholder='Username'
                  value={this.state.user}
                  onChange={this.handleInputChange}
                />
                <span className='icon is-small is-left'>
                  <i className='fa fa-user' />
                </span>
              </div>
            </div>
            <div className='field'>
              <div className='control has-icons-left'>
                <input className='input' type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.pass}
                  onChange={this.handleInputChange}
                />
                <span className='icon is-small is-left'>
                  <i className='fa fa-lock' />
                </span>
              </div>
            </div>
            <div className='field is-grouped is-grouped-centered'>
              <div className='control'>
                <button className='button is-success' onClick={this.submit}>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }

  submit () {
    this.props.logIn(
      this.state.username,
      this.state.password
    )
  }

  cancel () {
    this.props.history.push({ pathname: '/' })
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }
}

LogIn.propTypes = {
  history: PropTypes.object.isRequired,
  logIn: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
}
