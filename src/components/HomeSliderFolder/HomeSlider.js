import React, { Component } from 'react';
import styles from './HomeSlider.module.css';
import barber0 from '../../images/barber1.png';
import barber1 from '../../images/barber2.png';
import barber3 from '../../images/barber4.png';
import logo from '../../images/logo.png';

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
    this.state = {
      barber0c: styles.active,
      barber1c: styles.inactive, 
      barber2c: styles.inactive, 
      barber3c: styles.inactive,
    }
    this.lastPosition = 1;
  }

  componentDidMount() {
    setInterval(() => {
      this.changeImage(this.lastPosition);
      this.lastPosition < 3 ? this.lastPosition += 1 : this.lastPosition = 0;
    }, 5800);
  }

  changeImage(position) {
    this.lastPosition = position;
    this.setState({
      barber0c: position === 0 ? styles.active : styles.inactive,
      barber1c: position === 1 ? styles.active : styles.inactive, 
      barber2c: position === 2 ? styles.active : styles.inactive, 
      barber3c: position === 3 ? styles.active : styles.inactive,
    });
  };

  render () {
    const {barber0c, barber1c, barber2c,barber3c} = this.state;
    return (
      <div className={styles.homeSlider}>
        <img id="imageBarber1" className={`${barber0c} ${styles.sliderImage}`} src={logo} alt="barber at cut me" />
        <img id="imageBarber2" className={`${barber1c} ${styles.sliderImage}`} src={barber0} alt="barber at cut me" />
        <img id="imageBarber3" className={`${barber2c} ${styles.sliderImage}`} src={barber1} alt="barber at cut me" />
        <img id="imageBarber4" className={`${barber3c} ${styles.sliderImage}`} src={barber3} alt="barber at cut me" />
        <ul className={styles.ulButtons}>
          <li className={barber0c} onClick={() => this.changeImage(0)}></li>
          <li className={barber1c} onClick={() => this.changeImage(1)}></li>
          <li className={barber2c} onClick={() => this.changeImage(2)}></li>
          <li className={barber3c} onClick={() => this.changeImage(3)}></li>
        </ul>
      </div>
    );
  }
};

export default HomeSlider;
