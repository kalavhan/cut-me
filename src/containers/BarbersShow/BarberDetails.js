import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Loading from '../../components/Loading/Loading';
import styles from './BarberDetails.module.css';

const BarberDetails = props => {
  const { user } = props;
  const { idBarber } = useParams();
  const history = useHistory();
  const [barberDetails, setBarberDetails] = useState('loading');
  const [appointmentStatus, setAppointmentStatus] = useState('not sent');
  const [startDate, setStartDate] = useState(null);
  const [selectDate, setSelectDate] = useState('');

  if (barberDetails === 'loading') {
    fetch(`https://calm-crag-76746.herokuapp.com/barbers/show/${idBarber}`, {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
    }).then(response => response.json())
      .then(data => {
        setBarberDetails(data);
      });
  }

  const addAppointment = () => {
    if (startDate !== null) {
      setAppointmentStatus('sent');
      fetch('https://calm-crag-76746.herokuapp.com/appointments/add', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          user_id: user.id,
          barber_id: idBarber,
          appt_date: startDate,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          if ('id' in data) {
            history.push('/appointments');
            setAppointmentStatus('no sent');
          }
        });
    } else {
      setSelectDate('date-empty');
    }
  };

  return (
    <div className={`container ${styles.container}`}>
      <Sidebar c="barbers" />
      {barberDetails === 'loading' || appointmentStatus === 'sent' ? <Loading /> : null}
      <div className={`mainContent ${styles.mainContent}`}>
        <button type="button" className={styles.buttonLeft} onClick={() => history.push('/barbers')}>
          <FontAwesomeIcon icon={faCaretSquareLeft} />
          &#18;
        </button>
        { barberDetails !== 'loading' ? (
          <>
            <img src={barberDetails.image} className={styles.barberImage} alt="Barber" />
            <div className={styles.barberInfo}>
              <h2>{`${barberDetails.name} ${barberDetails.last_name}`}</h2>
              <h5>{barberDetails.role}</h5>
              <table>
                <tbody>
                  {barberDetails.services.map(e => (
                    <tr key={e.id}>
                      <td>{e.title}</td>
                      <td>{`$${e.price}`}</td>
                    </tr>
                  )) }
                </tbody>
              </table>
              <DatePicker
                selected={startDate}
                placeholderText="Select a date for the appointment"
                onChange={date => setStartDate(date)}
                showTimeSelect
                minDate={new Date()}
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM dd, yyyy H:mm"
              />
              <button type="button" className={styles.buttonAppointment} onClick={() => addAppointment()}>
                Make an appointment
              </button>
              {selectDate === 'date-empty' && <h4 className={styles.errorMessage}>Please select a date for the appointment</h4>}
            </div>
          </>
        ) : null }
      </div>
    </div>
  );
};

BarberDetails.defaultProps = {
  user: null,
};

BarberDetails.propTypes = {
  user: PropTypes.shape({ id: PropTypes.number, token: PropTypes.string }),
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(BarberDetails);
