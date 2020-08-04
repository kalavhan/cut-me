export const setUser = user => {
  window.sessionStorage.setItem('user', JSON.stringify(user));
  return ({
    type: 'SET_USER_INFO',
    user,
  });
};

export const removeUser = () => {
  window.sessionStorage.removeItem('user');
  return ({
    type: 'REMOVE_USER_INFO',
    user: null,
  });
};

export const getBarbers = barbers => ({
  type: 'GET_BARBERS',
  barbers,
});
