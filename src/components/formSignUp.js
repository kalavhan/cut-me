import React from 'react';
import styles from '../style/form.module.css';

const FormSignup = ({ formSignupState, setFormSignupState, signup }) => {
  const formClass = formSignupState === 'active' ? styles.active : styles.inactive;
  return (
    <div className={`${styles.formContainer} ${formClass}`}>
      <form className={styles.form} onSubmit={signup}>
        <button onClick={setFormSignupState} type="button">X</button>
        <h2>Sign Up</h2>
        <label htmlFor="name" id="name-label">
          Name(s)
          <input type="text" id="name" />
        </label>
        <label htmlFor="lastName" id="lastName-label">
          Last Name
          <input type="text" id="lastName" />
        </label>
        <label htmlFor="email" id="email-label">
          Email
          <input type="email" id="email" />
        </label>
        <label htmlFor="password" id="password-label">
          Password
          <input type="password" id="password" />
        </label>
        <label htmlFor="passwordConfirmation" id="passwordConfirmation-label">
          Confirm Password
          <input type="password" id="passwordConfirmation" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default FormSignup;
