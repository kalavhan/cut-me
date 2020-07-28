import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGooglePlusG, faVimeoV, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import logo from '../../images/logo.png';
import styles from './Sidebar.module.css';

const Sidebar = ({ c }) => (
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
    <button className={styles.logOut} type="button">
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

export default Sidebar;
