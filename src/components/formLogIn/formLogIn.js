import React from 'react';
import styles from './fLogIn.module.css';

const FormLogIn = ({ formLoginState, setFormLoginState, login }) => {
  const formClass = formLoginState === 'active' ? styles.active : styles.inactive;
  return (
    <div className={`${styles.formLoginContainer} ${formClass}`}>
      <form className={styles.formLogin} onSubmit={login}>
        <button onClick={setFormLoginState} type="button">X</button>
        <h2>Log In</h2>
        <label htmlFor="email" id="email-label">
          email
          <input type="text" id="email" autoFocus={true}/>
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
