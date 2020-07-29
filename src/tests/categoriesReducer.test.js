import categoriesReducer from '../reducers/categories';

describe('Test for the meal details reducer', () => {
  it('By sending the correct type it should return the categories array', () => {
    expect(categoriesReducer('', { type: 'GET_CATEGORIES', categories: [{ id: 1 }] })).toEqual([{ id: 1 }]);
  });

  it('By default without the correct type it should return an empty array', () => {
    expect(categoriesReducer([], { type: '', categories: [{ id: 1 }] })).toEqual([]);
  });
});
