import React from 'react';
import styles from './Loading.module.css';
import loadingGif from '../../images/loading.gif';

const Loading = () => (
  <div className={styles.loadingContainer}>
    <div>
      <img src={loadingGif} alt="Loading gif" />
    </div>
  </div>
);

export default Loading;
