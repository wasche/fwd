import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Welcome from './Welcome'
import LogIn from './LogIn'
import AddForm from './AddForm'
import Browser from './Browser'
import './content'

export default class Content extends Component {
  render () {
    return (
      <section>
        <Welcome />
        <LogIn setLoggedIn={this.props.setLoggedIn} />
        <AddForm />
        <Browser />
      </section>
    )
  }
}

Content.propTypes = {
  setLoggedIn: PropTypes.func.isRequired
}
