import React, { useState } from 'react';
import styles from './HomeSlider.module.css';
import image0 from '../../images/logo.png';
import image1 from '../../images/barber1.png';
import image2 from '../../images/barber2.png';
import image3 from '../../images/barber4.png';

const HomeSlider = () => {
  const [slide, setSlide] = useState(0);

  const changeSlide = position => {
    setSlide(position);
  };

  const t = setTimeout(() => {
    changeSlide(slide < 3 ? slide + 1 : 0);
  }, 6000);

  return (
    <div className={styles.homeSlider}>
      {[image0, image1, image2, image3].map((v, i) => (
        <img key={v} className={`${slide === i ? styles.active : styles.inactive} ${styles.sliderImage}`} src={v} alt="barber at cut me" />
      ))}
      <ul className={styles.ulButtons}>
        {[0, 1, 2, 3].map(n => (
          <li key={n}>
            <button className={slide === n ? styles.active : styles.inactive} onClick={() => { clearTimeout(t); changeSlide(n); }} type="button">.</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeSlider;
