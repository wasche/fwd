import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import LogIn from '../containers/LogIn'
import AddForm from '../containers/AddForm'

class Content extends Component {
  render () {
    return (
      <section className='hero-body'>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={LogIn} />
        <Route path='/add' component={AddForm} />
      </section>
    )
  }
}

export default Content
