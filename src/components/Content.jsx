import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import LogIn from '../containers/LogIn'
import AddForm from '../containers/AddForm'
import Search from '../components/Search'

class Content extends Component {
  render () {
    return (
      <section className='hero-body'>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={LogIn} />
        <Route path='/add' component={AddForm} />
        <Route path='/search' component={Search} />
      </section>
    )
  }
}

export default Content
