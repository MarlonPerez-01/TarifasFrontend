import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectTipoDemanda = ({ state, handleChange }) => {
  const [tiposDemanda] = useState(['residencial', 'general']);

  return (
    <select
      className='form-select'
      id='tipo_demanda'
      name='tipo_demanda'
      onChange={handleChange}
      value={state.tipo_demanda}
    >
      <option value=''>Tipos de demanda</option>
      {tiposDemanda.map((tipo_demanda) => (
        <option key={tipo_demanda} value={tipo_demanda}>
          {tipo_demanda[0].toUpperCase() +
            tipo_demanda.substring(1).toLowerCase()}
        </option>
      ))}
    </select>
  );
};

SelectTipoDemanda.propTypes = {};

export default SelectTipoDemanda;
