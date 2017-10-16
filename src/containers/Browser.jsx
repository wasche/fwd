import { connect } from 'react-redux'
import Component from '../components/Browser'

const mapStateToProps = state => {
  return {
    view: state.view.name
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
