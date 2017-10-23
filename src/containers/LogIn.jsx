import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logIn } from '../actions'
import Component from '../components/LogIn'

const mapStateToProps = state => {
  return {
    loggedIn: state.session.loggedIn
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: (user, pass) => {
      dispatch(logIn(user, pass)).catch(() => {})
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))
