import { connect } from 'react-redux'
import { addRoute } from '../actions'
import Component from '../components/AddForm'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addRoute: (name, url) => {
      dispatch(addRoute(name, url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
