import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { removeUser } from '../../actions/index';
import HomeSlider from '../../components/HomeSliderFolder/HomeSlider';
import FormLogin from '../../components/formLogIn';
import FormSignup from '../../components/formSignUp';
import styles from './Home.module.css';

const Home = props => {
  const { user, removeUser } = props;
  const history = useHistory();
  const [formLoginState, setFormLoginState] = useState('inactive');
  const [formSignupState, setFormSignupState] = useState('inactive');

  return (
    <div className={styles.home}>
      <FormLogin
        formLoginState={formLoginState}
        setFormLoginState={() => setFormLoginState('inactive')}
      />
      <FormSignup
        formSignupState={formSignupState}
        setFormSignupState={() => setFormSignupState('inactive')}
      />
      <HomeSlider />
      { user !== null && <button className={styles.logOut} type="button" onClick={() => removeUser(null)}>Log out</button> }
      <h1 className={styles.title}>¡CUT THROUGH FASHION!</h1>
      {user !== null ? (
        <div className={styles.buttonGroup}>
          <button type="button" onClick={() => history.push('/barbers/')} className={styles.buttonAppointment}>Search for a barber!</button>
          <button type="button" className={styles.buttonAppointment}>My appointments</button>
        </div>
      ) : (
        <div className={styles.buttonGroup}>
          <button onClick={() => { setFormLoginState('active'); }} className={styles.buttonHome} type="button">Log In</button>
          <button onClick={() => setFormSignupState('active')} className={styles.buttonHome} type="button">Sign Up</button>
        </div>
      )}
    </div>
  );
};

Home.defaultProps = {
  user: null,
};

Home.propTypes = {
  user: PropTypes.objectOf(PropTypes.string),
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  removeUser: user => {
    dispatch(removeUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
