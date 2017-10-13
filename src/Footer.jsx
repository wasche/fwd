import React, {Component} from 'react'
import './footer'

export default class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <dl>
          <dt>Popular</dt>
          <div>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </div>
        </dl>
        <dl>
          <dt>Latest</dt>
          <div>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </div>
        </dl>
        <dl>
          <dt>Recent</dt>
          <div>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </div>
        </dl>
      </footer>
    )
  }
}
