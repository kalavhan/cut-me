import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const BarberDetails = () => {
  const { idBarber } = useParams();
  const options = {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
  };
  fetch(`https://calm-crag-76746.herokuapp.com/barbers/show/${idBarber}`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  return (
    <div className="container">
      <Sidebar c="appointments" />
      <h1>{idBarber}</h1>
    </div>
  );
};

export default BarberDetails;
