import categoryMealsReducer from '../reducers/categoryMeals';

describe('Test for the category meals reducer', () => {
  it('By sending the correct type it should return the meals array', () => {
    expect(categoryMealsReducer('', { type: 'SET_CATEGORY_MEALS', meals: [{ id: 1 }] })).toEqual([{ id: 1 }]);
  });

  it('By default without the correct type it should return an empty array', () => {
    expect(categoryMealsReducer([], { type: '', meals: [{ id: 1 }] })).toEqual([]);
  });
});
