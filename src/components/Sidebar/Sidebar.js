import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGooglePlusG, faVimeoV, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import logo from '../../images/logo.png';
import { removeUser } from '../../actions/index';
import styles from './Sidebar.module.css';

const Sidebar = ({ user, c, removeUser }) => {
  const history = useHistory();
  if (user === null) { history.push('/'); }
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={logo} alt="cut me logo" />
      <div className={styles.groupButton}>
        <button type="button" className={c === 'barbers' ? styles.active : styles.inactive}>
          BARBERS
        </button>
        <button type="button" className={c === 'appointments' ? styles.active : styles.inactive}>
          APPOINTMENTS
        </button>
      </div>
      <button className={styles.logOut} type="button" onClick={() => { removeUser(null); history.push('/'); }}>
        <FontAwesomeIcon icon={faWindowClose} />
        Log out
      </button>
      <ul className={styles.socialLinks}>
        <li><FontAwesomeIcon icon={faTwitter} /></li>
        <li><FontAwesomeIcon icon={faFacebook} /></li>
        <li><FontAwesomeIcon icon={faGooglePlusG} /></li>
        <li><FontAwesomeIcon icon={faVimeoV} /></li>
        <li><FontAwesomeIcon icon={faPinterestP} /></li>
      </ul>
    </div>
  );
};

Sidebar.defaultProps = {
  user: null,
};

Sidebar.propTypes = {
  user: PropTypes.shape({ id: PropTypes.number, token: PropTypes.string }),
  removeUser: PropTypes.func.isRequired,
  c: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  removeUser: user => {
    dispatch(removeUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
