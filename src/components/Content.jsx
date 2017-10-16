import React, {Component} from 'react'
import Welcome from './Welcome'
import LogIn from '../containers/LogIn'
import AddForm from '../containers/AddForm'
import Browser from '../containers/Browser'
import './content'

export default class Content extends Component {
  render () {
    return (
      <section>
        <Welcome />
        <LogIn />
        <AddForm />
        <Browser />
      </section>
    )
  }
}
