import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setUser } from '../../actions/index';
import logo from '../../images/logo.png';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Button from '../../components/Button';
import styles from './Home.module.css';

const Home = props => {
  const { user } = props;
  const history = useHistory();

  const filterMeals = strFilter => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strFilter}`)
      .then(response => response.json())
      .then(data => {
      });
  };

  return (
    <div className={styles.home}>
      <HomeSlider />
      <img className={styles.logo} src={logo} alt="cut me logo"/>
      <h1 className={styles.title}>¡Cut through fashion!</h1>
      <Button buttonClass={styles.buttonSignUp} text="Sign Up" />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
