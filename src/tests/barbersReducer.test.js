import barbersReducer from '../reducers/barbers';

describe('Test for the barbers reducer', () => {
  it('By sending the correct case it should return the object sent', () => {
    expect(barbersReducer([], { type: 'GET_BARBERS', barbers: [{ id: 1 }] })).toEqual([{ id: 1 }]);
  });

  it('By default without the correct type it should return an empty array', () => {
    expect(barbersReducer([], { type: '', barbers: [{ id: 1 }] })).toEqual([]);
  });
});
