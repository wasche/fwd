import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, NavLink as Link } from 'react-router-dom'
import { search } from '../actions'

class SearchBox extends Component {
  constructor () {
    super()
    this.state = {
      query: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    if (this.props.location.pathname === '/search') {
      return (
        <div className='navbar-item'>
          <div className='field'>
            <p className='control has-icons-left'>
              <input className='input is-small' type='text' autoFocus
                name='query'
                value={this.state.query}
                onChange={this.handleInputChange}
              />
              <span className='icon is-small is-left'><i className='fa fa-search' /></span>
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <Link to='/search' exact className='navbar-item' activeClassName='is-active'>
          <span className='icon'><i className='fa fa-search' /></span>
        </Link>
      )
    }
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name
    let value = target.value

    this.setState({
      [name]: value
    })

    value.length >= 2 && this.props.search(value)
  }
}

SearchBox.propTypes = {
  location: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    search: (query) => {
      dispatch(search(query)).catch(() => {})
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox))
