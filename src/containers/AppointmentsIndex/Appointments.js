import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Appointments.module.css';

const Appointments = ({ user }) => {
  const [response, setResponse] = useState(null);
  if (response === null) {
    fetch(`https://calm-crag-76746.herokuapp.com/appointments/show/${user.id}`, {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
    }).then(response => response.json())
      .then(data => setResponse(data));
  }

  return (
    <div className={`container ${styles.container}`}>
      <Sidebar currentPage="appointments" />
      <div className={`mainContent ${styles.mainContent}`}>
        <h2 className={styles.title}>My Appointments</h2>
        {response !== null ? (
          <table className={styles.table}>
            <tbody>
              {response.appointments.map(e => (
                <tr key={e.id}>
                  <td>
                    {`${e.barber.name} ${e.barber.last_name}`}
                  </td>
                  <td>
                    {e.appt_date.split('T')[0]}
                  </td>
                  <td>
                    {e.appt_date.split('T')[1].split('.')[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
