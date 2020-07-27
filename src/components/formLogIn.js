import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/index';
import Loading from './Loading/Loading';
import styles from '../style/form.module.css';

const FormLogIn = ({ formLoginState, setFormLoginState, setUser}) => {
  const formClass = formLoginState === 'active' ? styles.active : styles.inactive;
  const [formSent, setFormSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();
    setFormSent(true);
    const postParameters = {
      email,
      password,
    };

    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(postParameters),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch('https://calm-crag-76746.herokuapp.com/users/signin', options)
      .then(response => response.json())
      .then(data => {
        if ('id' in data) {
          setFormLoginState('inactive');
          setUser(data);
          setEmail('');
          setPassword('');
        }
        setFormSent(false);
      });
  };

  return (
    <>
      {formSent === true ? <Loading /> : null}
      <div className={`${styles.formContainer} ${formClass}`} id="loginForm">
        <form className={styles.form} onSubmit={login}>
          <button onClick={setFormLoginState} type="button">X</button>
          <h2>Log In</h2>
          <label htmlFor="email" id="email-label">
            email
            <input type="text" id="email" onChange={e => setEmail(e.target.value)} value={email} />
          </label>
          <label htmlFor="password" id="password-label">
            password
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormLogIn);
