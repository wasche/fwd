import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './home'

export default class Home extends Component {
  render () {
    return (
      <div id='Home'>
        <header>
          <h1>fwd</h1>
          <Link to='/add'>Add</Link>
          <Link to='/browse'>Browse</Link>
        </header>
        <p>
          is a URL redirector that uses pretty labels for its shortened URLs.
          You can see a few of the examples below. Browse them all or add a new
          one with the links above.
        </p>
        <div className='lists'>
          <dl>
            <dt>Popular</dt>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </dl>
          <dl>
            <dt>Latest</dt>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </dl>
          <dl>
            <dt>Recent</dt>
            <dd>one</dd>
            <dd>two</dd>
            <dd>three</dd>
            <dd>four</dd>
            <dd>five</dd>
          </dl>
        </div>
      </div>
    )
  }
}
