const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
