import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Welcome from './Welcome'
import LogIn from '../containers/LogIn'
import AddForm from '../containers/AddForm'

export default class Content extends Component {
  render () {
    return (
      <section className='hero-body'>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={LogIn} />
        <PrivateRoute path='/add' component={AddForm} />
      </section>
    )
  }
}
