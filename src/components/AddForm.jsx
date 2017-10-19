import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

export default class AddForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      suffix: '',
      prefix: 'https://',
      url: ''
    }
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    if (!this.props.loggedIn) {
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <form className='addForm container is-fluid' onSubmit={e => e.preventDefault()}>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <h2 className='subtitle'>Add a redirect:</h2>
            <div className='field has-addons'>
              <span className='control'>
                <a className='button is-static'>hostname/</a>
              </span>
              <div className='control is-expanded'>
                <input className='input' type='text'
                  name='name'
                  placeholder='name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>
              <span className='control'>
                <span className='select'>
                  <select name='suffix' value={this.state.suffix} onChange={this.handleInputChange}>
                    <option value=''>{'{none}'}</option>
                    <option>{'{NUM}'}</option>
                    <option>{'{/{QUERY}}'}</option>
                  </select>
                </span>
              </span>
            </div>
            <div className='content has-text-centered'>
              <p><em>should redirect to</em></p>
            </div>
            <div className='field has-addons'>
              <span className='control'>
                <span className='select'>
                  <select name='prefix' value={this.state.prefix} onChange={this.handleInputChange}>
                    <option>https://</option>
                    <option>http://</option>
                  </select>
                </span>
              </span>
              <div className='control is-expanded'>
                <input className='input' type='text'
                  name='url'
                  placeholder='url'
                  value={this.state.url}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className='field is-grouped is-grouped-centered'>
              <div className='control'>
                <button className='button is-primary' onClick={this.submit}>Add</button>
              </div>
              <div className='control'>
                <a className='button is-light' onClick={this.cancel}>Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }

  submit () {
    this.props.addRoute(
      this.state.name + this.state.suffix,
      this.state.prefix + this.state.url
    )
  }

  cancel () {
    this.props.history.push({ pathname: '/' })
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    let value = target.value

    if (name === 'url' && /^https?:\/\//.test(value)) {
      let [prefix, rest] = /^(https?:\/\/)(.*)$/.exec(value).slice(1)
      value = rest
      this.setState({ prefix })
    }

    this.setState({
      [name]: value
    })
  }
}

AddForm.propTypes = {
  history: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  addRoute: PropTypes.func.isRequired
}
