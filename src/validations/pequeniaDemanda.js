export default function validar(state) {
  let errores = {};

  if (!state?.id_pliego) {
    errores.id_pliego = 'El campo pliego es obligatorio';
  } else if (isNaN(state.id_pliego)) {
    errores.id_pliego = 'El pliego debe ser un número';
  }

  if (!state?.id_distribuidor) {
    errores.id_distribuidor = 'El campo distribuidor es obligatorio';
  } else if (isNaN(state.id_distribuidor)) {
    errores.id_distribuidor = 'El distribuidor debe ser un número';
  }

  if (!state?.bloque) {
    errores.bloque = 'El campo bloque es obligatorio';
  } else if (isNaN(state.bloque)) {
    errores.bloque = 'El bloque debe ser un número';
  }

  if (!state?.cargo_energia) {
    errores.cargo_energia = 'El campo cargo energia es obligatorio';
  } else if (isNaN(state.cargo_energia)) {
    errores.cargo_energia = 'El cargo debe ser un número';
  } else if (parseFloat(state.cargo_energia) <= 0) {
    errores.cargo_energia = 'El cargo debe ser mayor a 0';
  }

  if (!state?.cargo_distribucion) {
    errores.cargo_distribucion = 'El campo cargo distribución es obligatorio';
  } else if (isNaN(state.cargo_distribucion)) {
    errores.cargo_distribucion = 'El cargo debe ser un número';
  } else if (parseFloat(state.cargo_distribucion) <= 0) {
    errores.cargo_distribucion = 'El cargo debe ser mayor a 0';
  }

  if (!state?.cargo_comercializacion) {
    errores.cargo_comercializacion =
      'El campo cargo comercialización es obligatorio';
  } else if (isNaN(state.cargo_comercializacion)) {
    errores.cargo_comercializacion = 'El cargo debe ser un número';
  } else if (parseFloat(state.cargo_comercializacion) <= 0) {
    errores.cargo_comercializacion = 'El cargo debe ser mayor a 0';
  }

  if (!state?.tipo_demanda) {
    errores.tipo_demanda = 'El campo tipo demanda es obligatorio';
  }

  if (Object.keys(errores).length === 0) {
    state.id_pliego = parseInt(state.id_pliego);
    state.id_distribuidor = parseInt(state.id_distribuidor);
    state.bloque = parseInt(state.bloque);
    state.cargo_energia = parseFloat(state.cargo_energia);
    state.cargo_distribucion = parseFloat(state.cargo_distribucion);
    state.cargo_comercializacion = parseFloat(state.cargo_comercializacion);
  }

  return errores;
}
