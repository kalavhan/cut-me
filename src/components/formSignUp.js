import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { setUser } from '../actions/index';
import Loading from './Loading/Loading';
import styles from '../style/form.module.css';

const FormSignup = ({ formSignupState, setFormSignupState, setUser }) => {
  const formClass = formSignupState === 'active' ? styles.active : styles.inactive;
  const [formSent, setFormSent] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();

  const signup = e => {
    e.preventDefault();
    setFormSent(true);
    const postParemeters = {
      email,
      password,
      password_confirmation: passwordConfirmation,
      name,
      last_name: lastName,
    };

    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(postParemeters),
      headers: {
        'Content-type': 'application/json',
      },
    };

    fetch('https://calm-crag-76746.herokuapp.com/users/signup', options)
      .then(response => response.json())
      .then(data => {
        setFormSent(false);
        if ('id' in data) {
          setFormSignupState('inactive');
          setUser(data);
          setEmail('');
          setName('');
          setLastName('');
          setPassword('');
          setPasswordConfirm('');
          history.push('/barbers');
        }
      });
  };

  return (
    <>
      {formSent === true ? <Loading /> : null}
      <div className={`${styles.formContainer} ${formClass}`} id="signupForm">
        <form className={styles.form} onSubmit={signup}>
          <button className={styles.buttonClose} onClick={setFormSignupState} type="button">X</button>
          <h2>Sign Up</h2>
          <label htmlFor="name" id="name-label">
            Name(s)
            <input type="text" id="name" onChange={e => setName(e.target.value)} value={name} />
          </label>
          <label htmlFor="lastName" id="lastName-label">
            Last Name
            <input type="text" id="lastName" onChange={e => setLastName(e.target.value)} value={lastName} />
          </label>
          <label htmlFor="email" id="email-label">
            Email
            <input type="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
          </label>
          <label htmlFor="password" id="password-label">
            Password
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
          </label>
          <label htmlFor="passwordConfirmation" id="passwordConfirmation-label">
            Confirm Password
            <input type="password" id="passwordConfirmation" onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirmation} />
          </label>
          <button className={styles.buttonNormal} type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

FormSignup.propTypes = {
  setUser: PropTypes.func.isRequired,
  formSignupState: PropTypes.string.isRequired,
  setFormSignupState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSignup);
