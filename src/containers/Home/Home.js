import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { setUser } from '../../actions/index';
import HomeSlider from '../../components/HomeSliderFolder/HomeSlider';
import FormLogin from '../../components/formLogIn';
import FormSignup from '../../components/formSignUp';
import Loading from '../../components/Loading/Loading';
import styles from './Home.module.css';

const Home = props => {
  const { user, setUser } = props;
  const history = useHistory();
  const [formLoginState, setFormLoginState] = useState('inactive');
  const [formSignupState, setFormSignupState] = useState('inactive');
  const [formSent, setFormSent] = useState(false);
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

  const signup = e => {
    e.preventDefault();
    setFormSent(true);
    const myPost = {
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirm: e.target.passwordConfirmation.value,
      name: e.target.name.value,
      last_name: e.target.lastName.value,
    };

    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(myPost),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch('https://calm-crag-76746.herokuapp.com/users/signup', options)
      .then(response => response.json())
      .then(data => {
        if ('id' in data) {
          setFormSignupState('inactive');
          setFormSent(false);
          setUser(data);
        }
      });
  };

  return (
    <div className={styles.home}>
      {formSent === true ? <Loading /> : null}
      <FormLogin
        formLoginState={formLoginState}
        setFormLoginState={() => setFormLoginState('inactive')}
        login={login}
        formSent={formSent}
      />
      <FormSignup
        formSignupState={formSignupState}
        setFormSignupState={() => setFormSignupState('inactive')}
        signup={signup}
        formSent={formSent}
      />
      <HomeSlider />
      <h1 className={styles.title}>¡CUT THROUGH FASHION!</h1>
      {'id' in user ? <h2>pop</h2> : (
        <>
          <button onClick={() => { setFormLoginState('active'); }} className={styles.buttonHome} type="button">Log In</button>
          <h2 className={styles.labelOr}> Or </h2>
          <button onClick={() => setFormSignupState('active')} className={styles.buttonHome} type="button">Sign Up</button>
        </>
      )}
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
