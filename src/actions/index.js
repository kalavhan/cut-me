export const setUser = user => {
  window.sessionStorage.setItem('user', JSON.stringify(user));
  return ({
    type: 'SET_USER_INFO',
    user,
  });
};

export const getBarbers = barbers => ({
  type: 'GET_BARBERS',
  barbers,
});
