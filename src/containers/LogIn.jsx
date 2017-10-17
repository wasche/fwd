import { connect } from 'react-redux'
import { logIn } from '../actions'
import Component from '../components/LogIn'

const mapStateToProps = state => {
  return {
    loggedIn: state.session.loggedIn
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: session => {
      dispatch(logIn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
