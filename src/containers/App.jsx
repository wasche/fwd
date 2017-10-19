import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSession } from '../actions'
import Component from '../components/App'

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadSession: () => {
      dispatch(getSession())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))
