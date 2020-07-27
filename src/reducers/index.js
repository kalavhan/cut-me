import { combineReducers } from 'redux';
import userReducer from './user';
import barbersReducer from './barbers';

const rootReducer = combineReducers({
  user: userReducer,
  barbers: barbersReducer,
});

export default rootReducer;
