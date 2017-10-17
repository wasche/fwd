import React, {Component} from 'react'
import './welcome'

export default class Welcome extends Component {
  render () {
    return (
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-one-third'>
            <p className='welcome has-text-justified'>
              <em>fwd</em> is a URL redirector that uses pretty labels for its
              shortened URLs. This makes them easier to remember. It also
              supports a limited set of dynamic styles to forward an argument to
              the target page.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
