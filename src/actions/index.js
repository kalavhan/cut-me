export const setUser = user => {
  window.sessionStorage.setItem('user', JSON.stringify(user));
  return ({
    type: 'SET_USER_INFO',
    user,
  });
};

export const removeUser = user => {
  window.sessionStorage.removeItem('user');
  return ({
    type: 'REMOVE_USER_INFO',
    user,
  });
};

export const getBarbers = barbers => ({
  type: 'GET_BARBERS',
  barbers,
});
