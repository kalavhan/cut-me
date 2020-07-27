const barbersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BARBERS':
      return action.barbers;
    default:
      return state;
  }
};

export default barbersReducer;
