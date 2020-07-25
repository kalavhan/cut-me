import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setUser } from '../../actions/index';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import FormLogin from '../../components/formLogIn/formLogIn';
import styles from './Home.module.css';

const Home = props => {
  const { user } = props;
  const history = useHistory();
  const [formLoginState, setFormLoginState] = useState('inactive');
  const filterMeals = strFilter => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strFilter}`)
      .then(response => response.json())
      .then(data => {
      });
  };

  const hideLoginForm = () => {
    setFormLoginState('inactive');
  };

  return (
    <div className={styles.home}>
      <FormLogin formLoginState={formLoginState} setFormLoginState={setFormLoginState('inactive')} />
      <HomeSlider />
      <h1 className={styles.title}>¡CUT THROUGH FASHION!</h1>
      <button onClick={() => setFormLoginState('active')} className={styles.buttonHome} type="button">Log In</button>
      <h2 className={styles.labelOr}> Or </h2>
      <button onClick={() => setFormLoginState('active')} className={styles.buttonHome} type="button">Sign Up</button>
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
