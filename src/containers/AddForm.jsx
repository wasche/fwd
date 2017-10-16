import { connect } from 'react-redux'
import { changeView } from '../actions'
import Component from '../components/AddForm'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeView: view => {
      dispatch(changeView(view))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
