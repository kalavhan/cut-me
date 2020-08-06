import { SET_USER_INFO, REMOVE_USER_INFO } from '../actions/types';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.user;
    case REMOVE_USER_INFO:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
