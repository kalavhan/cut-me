import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebook, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { getBarbers } from '../../actions/index';
import Loading from '../../components/Loading/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Barbers.module.css';

const Barbers = props => {
  const { barbers, getBarbers } = props;
  const [sliderClass, setSliderClass] = useState(0);
  const [barbersArray, setBarbersArray] = useState([]);
  const [firstPosition, setFirstPosition] = useState([]);

  const barbersSlider = (first, movement) => {
    const max = barbers.length - 1;
    const second = first === max ? 0 : first + 1;
    const third = second === max ? 0 : second + 1;
    const fourth = third === max ? 0 : third + 1;
    setSliderClass(movement);
    setBarbersArray([
      barbers[first],
      barbers[second],
      barbers[third],
      barbers[fourth],
    ]);
    const prev = first === 0 ? max : first - 1;
    const next = first === max ? 0 : first + 1;
    setFirstPosition([prev, next]);
  };

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
  } else if (sliderClass === 0) { barbersSlider(0, styles.moveSliderStill); }

  return (
    <div className="container">
      { barbers.length < 1
        ? <Loading /> : null }
      <Sidebar c="barbers" />
      <div className={`mainContent ${styles.mainContent}`}>
        <h1 className={styles.title}>OUR BARBERS</h1>
        <h5 className={styles.subTitle}>Please select a barber</h5>
        <div className={styles.sliderBarbers}>
          <button type="button" className={styles.buttonLeft} onClick={() => barbersSlider((firstPosition[0]), styles.moveSliderLeft)}>
            <FontAwesomeIcon icon={faCaretSquareLeft} />
            &#18;
          </button>
          <div className={styles.sliderInnerContainer}>
            { barbersArray.length < 1
              ? <h1>Loading</h1> : (
                <ul className={sliderClass}>
                  { barbersArray.map(e => (
                    <li key={e.id} className={styles.sliderCard}>
                      <a href={`/barber-details/${e.id}`}>
                        <img src={e.image} alt="barber profile" className={styles.slideCardImage} />
                        <h3 className={styles.sliderCardTitle}>{ e.name }</h3>
                        <h6 className={styles.sliderCardRole}>{ e.role }</h6>
                        <ul className={styles.sliderCardIcons}>
                          <li><FontAwesomeIcon icon={faTwitter} /></li>
                          <li><FontAwesomeIcon icon={faFacebook} /></li>
                          <li><FontAwesomeIcon icon={faPinterestP} /></li>
                        </ul>
                      </a>
                    </li>
                  ))}
                </ul>
              ) }
          </div>
          <button type="button" className={styles.buttonRight} onClick={() => barbersSlider((firstPosition[1]), styles.moveSliderRight)}>
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
};

Barbers.propTypes = {
  barbers: PropTypes.arrayOf(PropTypes.object),
  getBarbers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  barbers: state.barbers,
});

const mapDispatchToProps = dispatch => ({
  getBarbers: barbers => {
    dispatch(getBarbers(barbers));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Barbers);
