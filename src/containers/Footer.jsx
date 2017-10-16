import { connect } from 'react-redux'
import { loadRoutes } from '../actions'
import Component from '../components/Footer'

const mapStateToProps = state => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadRoutes: () => {
      dispatch(loadRoutes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
