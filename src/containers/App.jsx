import { connect } from 'react-redux'
import { changeView } from '../actions'
import Component from '../components/App'

const mapStateToProps = state => {
  return {
    view: state.view.name
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    resetView: () => {
      dispatch(changeView('welcome'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
