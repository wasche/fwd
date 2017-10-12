import React, {Component} from 'react'
import './welcome'

export default class Welcome extends Component {
  render () {
    return (
      <p className='welcome'>
        is a URL redirector that uses pretty labels for its shortened URLs.
        You can see a few of the examples below. Browse them all or add a new
        one with the links above.
      </p>
    )
  }
}
