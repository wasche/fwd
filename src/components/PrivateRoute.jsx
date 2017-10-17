import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import store from '../store'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.getState().session.loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

PrivateRoute.propTypes = {
  location: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired
}

export default withRouter(PrivateRoute)
