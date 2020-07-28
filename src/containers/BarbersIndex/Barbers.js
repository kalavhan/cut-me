import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import { getBarbers } from '../../actions/index';
import Loading from '../../components/Loading/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Barbers.module.css';

const Barbers = props => {
  const { user, barbers, getBarbers } = props;
  const history = useHistory();
  if (user === null) { history.push('/'); }
  if (barbers.length < 1) {
    const options = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
    };

    fetch('https://calm-crag-76746.herokuapp.com/barbers/index', options)
      .then(response => response.json())
      .then(data => {
        getBarbers(data);
      });
  }

  return (
    <div className={styles.container}>
      <Sidebar c="barbers" />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>OUR BARBERS</h1>
        <h5 className={styles.subTitle}>Please select a barber</h5>
        <div className={styles.sliderBarbers}>
          <iconButton type="button" className={styles.buttonLeft}><FontAwesomeIcon icon={faCaretSquareLeft} /></iconButton>
          <div>
            { barbers.length < 1
              ? <Loading /> : (
                <h1>The slider</h1>
              ) }
          </div>
          <iconButton type="button" className={styles.buttonRight}><FontAwesomeIcon icon={faCaretSquareRight} /></iconButton>
        </div>
      </div>
    </div>
  );
};

Barbers.defaultProps = {
  barbers: [],
};

Barbers.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  barbers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  user: state.user,
  barbers: state.barbers,
});

const mapDispatchToProps = dispatch => ({
  getBarbers: barbers => {
    dispatch(getBarbers(barbers));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Barbers);
