import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Appointments.module.css';

const Appointments = ({ user }) => {
  const [appointments, setAppointments] = useState(null);
  if (appointments === null) {
    fetch(`https://calm-crag-76746.herokuapp.com/appointments/show/${user.id}`, {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
    }).then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  return (
    <div className={styles.container}>
      <Sidebar c="appointments" />
      <div className={styles.mainContent}>
        {appointments !== null ? (
          <table />
        ) : (<h2>Loading</h2>)}
      </div>
    </div>
  );
};

Appointments.defaultProps = {
  user: null,
};

Appointments.propTypes = {
  user: PropTypes.shape({ id: PropTypes.number, token: PropTypes.string }),
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Appointments);
