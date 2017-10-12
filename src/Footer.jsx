import React, {Component} from 'react'
import './footer'

export default class Footer extends Component {
  render () {
    return (
      <footer>
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
      </footer>
    )
  }
}
