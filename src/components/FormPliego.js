import axios from 'axios';
import React from 'react';
import useForm from '../hooks/useForm';
import validacion from '../validations/pequeniaDemanda';
import Error from './Error';
import SelectBloques from './SelectBloques';
import SelectDistribuidores from './SelectDistribuidores';
import SelectPliegos from './SelectPliegos';
import SelectTipoDemanda from './SelectTipoDemanda';

const FormPliego = () => {
  const initialState = {
    id_pliego: '',
    id_distribuidor: '',
    bloque: '',
    cargo_energia: '',
    cargo_distribucion: '',
    cargo_comercializacion: '',
    tipo_demanda: '',
  };

  const postPequeniaDemanda = () => {
    crearPequeniaDemanda(state);
  };

  const { state, errors, handleChange, handleSubmit, limpiar } = useForm(
    initialState,
    postPequeniaDemanda,
    validacion
  );

  const crearPequeniaDemanda = async (pequeniaDemanda) => {
    await axios.post('http://127.0.0.1:8080/pequenia-demanda', pequeniaDemanda);
    limpiar();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='row g-3 needs-validation'
      noValidate
    >
      <div>
        <label htmlFor='id_pliego' className='form-label'>
          Selecciona un pliego
        </label>
        <SelectPliegos state={state} handleChange={handleChange} />
        {errors.id_pliego && <Error msg={errors.id_pliego} />}
      </div>
      <div>
        <label htmlFor='id_distribuidor' className='form-label'>
          Selecciona un distribuidor
        </label>
        <SelectDistribuidores state={state} handleChange={handleChange} />
        {errors.id_distribuidor && <Error msg={errors.id_distribuidor} />}
      </div>
      <div>
        <label htmlFor='tipo_demanda' className='form-label'>
          Tipo de demanda
        </label>
        <SelectTipoDemanda state={state} handleChange={handleChange} />
        {errors.tipo_demanda && <Error msg={errors.tipo_demanda} />}
      </div>
      <div>
        <label htmlFor='bloque' className='form-label'>
          Selecciona un bloque
        </label>
        <SelectBloques state={state} handleChange={handleChange} />
        {errors.bloque && <Error msg={errors.bloque} />}
      </div>
      <div>
        <label htmlFor='cargo_energia' className='form-label'>
          Cargo de energía
        </label>

        <input
          type='text'
          className='form-control'
          name='cargo_energia'
          id='cargo_energia'
          onChange={handleChange}
          value={state.cargo_energia}
        />
        {errors.cargo_energia && <Error msg={errors.cargo_energia} />}
      </div>
      <div>
        <label htmlFor='cargo_distribucion' className='form-label'>
          Distribucion
        </label>

        <input
          type='text'
          className='form-control'
          name='cargo_distribucion'
          id='cargo_distribucion'
          onChange={handleChange}
          value={state.cargo_distribucion}
        />
        {errors.cargo_distribucion && <Error msg={errors.cargo_distribucion} />}
      </div>
      <div>
        <label htmlFor='cargo_comercializacion' className='form-label'>
          Comercializacion
        </label>
        <input
          type='text'
          className='form-control'
          name='cargo_comercializacion'
          id='cargo_comercializacion'
          onChange={handleChange}
          value={state.cargo_comercializacion}
        />
        {errors.cargo_comercializacion && (
          <Error msg={errors.cargo_comercializacion} />
        )}
      </div>
      <div>
        <input type='submit' className='btn btn-primary' value='Crear' />
      </div>
    </form>
  );
};

export default FormPliego;
