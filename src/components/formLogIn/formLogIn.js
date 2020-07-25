import React from 'react';
import styles from './fLogIn.module.css';

const FormLogIn = ({ formLoginState, setFormLoginState }) => {
  const formClass = formLoginState === 'active' ? styles.active : styles.inactive;
  return (
    <div className={`${styles.formLoginContainer} ${formClass}`}>
      <form className={styles.formLogin}>
        <button onClick={setFormLoginState} type="button">X</button>
        <h2>Log In</h2>
        <label htmlFor="emailLogin" id="emailLogin-label">
          email
          <input type="text" id="emailLogin" autoFocus={true}/>
        </label>
        <label htmlFor="passwordLogin" id="passwordLogin-label">
          password
          <input type="password" id="passwordLogin" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default FormLogIn;
