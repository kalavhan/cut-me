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

  const login = e => {
    e.preventDefault();
    // e.target.email.value;
    // e.target.password.value;
    // const myPost = {
    //   email: 'A post about true facts',
    //   pass
    // }
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(myPost),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // fetch(`https://calm-crag-76746.herokuapp.com/users/signin`)
    //   .then(response => response.json())
    //   .then(data => {
    //   });
  };

  const register = e => {
    e.preventDefault();
    const myPost = {
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.passwordConfirmation.value,
      first_name: e.target.firstName.value,
      middle_name: e.target.middleName.value,
      last_name: e.target.lastName.value,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(myPost),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch('https://calm-crag-76746.herokuapp.com/users/signup', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.home}>
      <FormLogin formLoginState={formLoginState} setFormLoginState={() => setFormLoginState('inactive')} login={login} />
      <FormResgister />
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
