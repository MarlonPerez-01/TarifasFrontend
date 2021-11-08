import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SelectBloques = ({ state, handleChange }) => {
  const [bloques] = useState([0, 1, 2, 3]);

  return (
    <select
      className='form-select'
      name='bloque'
      id='bloque'
      onChange={handleChange}
      value={state.bloque}
    >
      <option>Bloques</option>
      {bloques.map((bloque) => (
        <option key={bloque} value={bloque}>
          {bloque}
        </option>
      ))}
    </select>
  );
};

SelectBloques.propTypes = {};

export default SelectBloques;
