import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import PropType from 'prop-types';
import { getCategories, setCategoryMeals } from '../actions/index';
import CategoriesCard from '../components/CategoriesCard';
import Nav from '../components/Nav';
import MealsCard from '../components/MealsCard';

const Home = props => {
  const { user } = props;
  const history = useHistory();

  const filterMeals = strFilter => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strFilter}`)
      .then(response => response.json())
      .then(data => {
        setCategoryMeals(data.meals);
      });
  };

  return (
    <>
      <Nav />
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getCategories: categories => {
    dispatch(getCategories(categories));
  },
  setCategoryMeals: meals => {
    dispatch(setCategoryMeals(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
