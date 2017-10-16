export const changeView = view => {
  return {
    type: 'SET_VIEW',
    view
  }
}

export const logIn = () => {
  return {
    type: 'LOG_IN'
  }
}
