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
        <AddForm changeView={this.props.changeView} />
        <Browser currentView={this.props.currentView} />
      </section>
    )
  }
}

Content.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  currentView: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired
}
