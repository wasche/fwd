import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class AddForm extends Component {
  constructor () {
    super()
    this.submit = this.submit.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  render () {
    return (
      <form className='addForm container is-fluid' onSubmit={e => e.preventDefault()}>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <div className='field has-addons'>
              <span className='control'>
                <a className='button is-static'>hostname/</a>
              </span>
              <div className='control is-expanded'>
                <input className='input' type='text' name='name' placeholder='name' />
              </div>
              <span className='control'>
                <span className='select'>
                  <select>
                    <option defaultValue>{'{none}'}</option>
                    <option>{'{NUM}'}</option>
                    <option>{'{/:query}'}</option>
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
                  <select>
                    <option defaultValue>https://</option>
                    <option>http://</option>
                  </select>
                </span>
              </span>
              <div className='control is-expanded'>
                <input className='input' type='text' name='url' placeholder='url' />
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
    //
  }

  cancel () {
    this.props.history.push({ pathname: '/' })
  }
}

AddForm.propTypes = {
  history: PropTypes.object.isRequired
}
