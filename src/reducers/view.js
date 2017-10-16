export default (state = {name: 'welcome', requested: null, loggedIn: false}, action) => {
  switch (action.type) {
    case 'SET_VIEW':
      return Object.assign({}, state, {
        name: ((state.loggedIn || ['add', 'edit', 'update'].indexOf(action.view) < 0) && action.view) || 'log-in',
        requested: (!state.loggedIn && action.view) || null
      })
    case 'LOG_IN':
      return Object.assign({}, state, {
        loggedIn: true,
        name: state.requested || state.name,
        requested: null
      })
    default:
      return state
  }
}
