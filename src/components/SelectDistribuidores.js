import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SelectDistribuidores = ({ state, handleChange }) => {
  const [distribuidores, setDistribuidores] = useState([]);

  const fetchDistribuidores = async () => {
    const response = await axios.get('http://127.0.0.1:8080/distribuidores');
    setDistribuidores(response.data.data);
  };

  useEffect(() => {
    fetchDistribuidores();
  }, []);

  return (
    <select
      className='form-select'
      name='id_distribuidor'
      id='id_distribuidor'
      onChange={handleChange}
      value={state.id_distribuidor}
    >
      <option value=''>Distribuidores</option>
      {distribuidores.map(({ id_distribuidor, nombre }) => (
        <option key={id_distribuidor} value={id_distribuidor}>
          {nombre}
        </option>
      ))}
    </select>
  );
};

SelectDistribuidores.propTypes = {};

export default SelectDistribuidores;
