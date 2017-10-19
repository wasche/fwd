import { connect } from 'react-redux'
import { getSession } from '../actions'
import Component from '../components/App'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadSession: () => {
      dispatch(getSession())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
