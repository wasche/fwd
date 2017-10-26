import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './search'

class Search extends Component {
  render () {
    let routes = this.props.routes.map(r => (
      <div className='columns is-mobile is-multiline' key={r.id}>
        <div className='column is-one-third-mobile name'>{r.name}</div>
        <div className='column is-one-third-mobile count has-text-right'>{r.count}</div>
        <div className='column is-one-third-mobile date'>{r.used}</div>
        <div className='column url'>{r.url}</div>
      </div>
    ))

    return (
      <div className='container search'>
        <div className='columns is-mobile is-multiline'>
          <div className='column is-one-third-mobile name'><span>Name</span></div>
          <div className='column is-one-third-mobile count has-text-right'><span>Count</span></div>
          <div className='column is-one-third-mobile date'><span>Last Used</span></div>
          <div className='column url'><span>URL</span></div>
        </div>
        {routes}
      </div>
    )
  }
}

Search.propTypes = {
  routes: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    routes: state.search.routes
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
