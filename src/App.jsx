import React, {Component} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import './app'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    )
  }
}
