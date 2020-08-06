import { setUser, removeUser, getBarbers } from '../actions/index';

describe('Test for the action of redux', () => {
  it('By calling setUser it should return an object with type SET_USER_INFO', () => {
    expect(setUser({ id: 1, token: 'kmskmd' }).type).toEqual('SET_USER_INFO');
  });

  it('By calling setUser it should return the sent object as the user property', () => {
    expect(setUser({ id: 1, token: 'kmskmd' }).user).toEqual({ id: 1, token: 'kmskmd' });
  });

  it('By calling removeUser it should return REMOVE_USER_INFO as type', () => {
    setUser({ id: 1, token: 'kmskmd' });
    expect(removeUser(null).type).toEqual('REMOVE_USER_INFO');
  });

  it('By calling removeUser it should return null as the user', () => {
    setUser({ id: 1, token: 'kmskmd' });
    expect(removeUser(null).user).toEqual(null);
  });

  it('By calling getBarbers it should return an object with GET_BARBERS as type', () => {
    expect(getBarbers([{ id: 1 }]).type).toEqual('GET_BARBERS');
  });

  it('By calling getBarbers it should return the passed array of objects as barbers', () => {
    expect(getBarbers([{ id: 1 }]).barbers).toEqual([{ id: 1 }]);
  });
});
