import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook, faPinterestP } from '@fortawesome/free-brands-svg-icons';
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
      { barbers.length < 1
        ? <Loading /> : null }
      <Sidebar c="barbers" />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>OUR BARBERS</h1>
        <h5 className={styles.subTitle}>Please select a barber</h5>
        <div className={styles.sliderBarbers}>
          <button type="button" className={styles.buttonLeft}>
            <FontAwesomeIcon icon={faCaretSquareLeft} />
            &#18;
          </button>
          <div className={styles.sliderInnerContainer}>
            { barbers.length < 1
              ? <h1>Loading</h1> : (
                <>
                  { barbers.map(e => (
                    <div key={e.id} className={styles.sliderCard}>
                      <img src={e.image} alt="barber profile" className={styles.slideCardImage} />
                      <h3 className={styles.sliderCardTitle}>{ e.name }</h3>
                      <h6 className={styles.sliderCardRole}>{ e.role }</h6>
                      <ul className={styles.sliderCardIcons}>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faPinterestP} /></li>
                      </ul>
                    </div>
                  ))}
                </>
              ) }
          </div>
          <button type="button" className={styles.buttonRight}>
            <FontAwesomeIcon icon={faCaretSquareRight} />
            &#18;
          </button>
        </div>
      </div>
    </div>
  );
};

Barbers.defaultProps = {
  barbers: [],
  user: null,
};

Barbers.propTypes = {
  user: PropTypes.shape({ id: PropTypes.number, token: PropTypes.string }),
  barbers: PropTypes.arrayOf(PropTypes.object),
  getBarbers: PropTypes.func.isRequired,
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
