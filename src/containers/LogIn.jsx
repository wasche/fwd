import { connect } from 'react-redux'
import { logIn } from '../actions'
import Component from '../components/LogIn'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logIn: view => {
      dispatch(logIn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
