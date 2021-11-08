import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SelectPliegos = ({ state, handleChange }) => {
  const [pliegos, setPliegos] = useState([]);

  const fetchPliegos = async () => {
    const response = await axios.get('http://127.0.0.1:8080/pliegos');
    setPliegos(response.data.data);
  };

  useEffect(() => {
    fetchPliegos();
  }, []);

  return (
    <select
      className='form-select'
      id='id_pliego'
      name='id_pliego'
      onChange={handleChange}
      value={state.id_pliego}
    >
      <option value=''>Pliegos</option>
      {pliegos.map(({ id_pliego, fecha_inicio, fecha_caduca }) => (
        <option key={id_pliego} value={id_pliego}>
          Desde {new Date(fecha_inicio).toLocaleDateString()} - Hasta{' '}
          {new Date(fecha_caduca).toLocaleDateString()}
        </option>
      ))}
    </select>
  );
};

SelectPliegos.propTypes = {};

export default SelectPliegos;
