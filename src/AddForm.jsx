import React, {Component} from 'react'
import './addForm'

export default class AddForm extends Component {
  render () {
    return (
      <form className='addForm' onSubmit={e => e.preventDefault()}>
        <div className='row'>
          <div className='input-group'>
            <span>hostname/</span>
            <input type='text' name='name' placeholder='name' />
            <ul>
              <li className='selected'>{'{none}'}</li>
              <li>{'{NUM}'}</li>
              <li>{'{/:query}'}</li>
            </ul>
          </div>
        </div>
        <span>should redirect to</span>
        <div className='input-group'>
          <ul>
            <li className='selected'>https://</li>
            <li>http://</li>
          </ul>
          <input type='text' name='url' placeholder='url' />
        </div>
      </form>
    )
  }
}
