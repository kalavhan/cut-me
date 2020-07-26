import React from 'react';
import styles from '../style/form.module.css';

const FormLogIn = ({ formLoginState, setFormLoginState, login }) => {
  const formClass = formLoginState === 'active' ? styles.active : styles.inactive;
  return (
    <div className={`${styles.formContainer} ${formClass}`}>
      <form className={styles.form} onSubmit={login}>
        <button onClick={setFormLoginState} type="button">X</button>
        <h2>Log In</h2>
        <label htmlFor="email" id="email-label">
          email
          <input type="text" id="email" />
        </label>
        <label htmlFor="password" id="password-label">
          password
          <input type="password" id="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default FormLogIn;
