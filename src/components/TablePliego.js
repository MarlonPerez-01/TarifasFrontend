import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const TablePliego = (props) => {
  const [tarifas, setTarifas] = useState([]);

  const fetchTarifas = async () => {
    const response = await axios.get('http://127.0.0.1:8080/pequenia-demanda');
    setTarifas(response.data.data);
  };

  useEffect(() => {
    fetchTarifas();
  }, []);

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Inicia</th>
          <th scope='col'>Caduca</th>
          <th scope='col'>Distribuidor</th>
          <th scope='col'>Bloque</th>
          <th scope='col'>Demanda</th>
          <th scope='col'>Energía</th>
          <th scope='col'>Comercialización</th>
          <th scope='col'>Distribución</th>
        </tr>
      </thead>
      <tbody>
        {tarifas.map(
          ({
            id_pequenia,
            bloque,
            cargo_energia,
            cargo_comercializacion,
            cargo_distribucion,
            fecha_inicio,
            fecha_caduca,
            tipo_demanda,
            distribuidor,
          }) => (
            <tr key={id_pequenia}>
              <td>{new Date(fecha_inicio).toLocaleDateString()}</td>
              <td>{new Date(fecha_caduca).toLocaleDateString()}</td>
              <td>{distribuidor}</td>
              <td>{bloque}</td>
              <td>{tipo_demanda}</td>
              <td>{cargo_energia}</td>
              <td>{cargo_comercializacion}</td>
              <td>{cargo_distribucion}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

TablePliego.propTypes = {};

export default TablePliego;
