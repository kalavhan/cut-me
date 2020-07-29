import userReducer from '../reducers/user';

describe('Test for the user reducer', () => {
  it('By sending SET_USER_INFO as type it should return the passed object', () => {
    expect(userReducer('', { type: 'SET_USER_INFO', user: { id: 1 } })).toEqual({ id: 1 });
  });

  it('By sending REMOVE_USER_INFO as type it should return null', () => {
    expect(userReducer(null, { type: 'REMOVE_USER_INFO', user: null })).toEqual(null);
  });

  it('By sending a wrong type it should return null as the user', () => {
    expect(userReducer(null, {type: '', user: null})).toEqual(null);
  });
});
