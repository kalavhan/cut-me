import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGooglePlusG, faVimeoV, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.png';
import { removeUser } from '../../actions/index';
import styles from './Sidebar.module.css';

const Sidebar = ({ user, currentPage, removeUser }) => {
  const history = useHistory();
  if (user === null) { history.push('/'); }
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={logo} alt="cut me logo" />
      <div className={styles.groupButton}>
        <button
          type="button"
          className={currentPage === 'barbers' ? styles.active : styles.inactive}
          onClick={() => history.push('/barbers')}
        >
          BARBERS
        </button>
        <button
          type="button"
          className={currentPage === 'appointments' ? styles.active : styles.inactive}
          onClick={() => history.push('/appointments')}
        >
          APPOINTMENTS
        </button>
        <button type="button" className={styles.inactive} onClick={() => { removeUser(null); history.push('/'); }}>
          Log out
        </button>
      </div>
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
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  removeUser: () => {
    dispatch(removeUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
