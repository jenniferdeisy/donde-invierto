import * as types from '../constants/actionTypes';

export function selectEmpresa(empresa) {
  return (dispatch) => {
    dispatch({
      type: types.EMPRESA_SELECTED,
      empresa
    })
  }
}

export function inputEmpresaChange(e) {
  return (dispatch) => {
    dispatch({
      type: types.INPUT_EMPRESA_CHANGED,
      value: e.target.value
    });
  }
}

export function inputPeriodoChange(e) {
  return (dispatch) => {
    dispatch({
      type: types.INPUT_PERIODO_CHANGED,
      value: e.target.value
    });
  }
}

export function inputAnioChange(e) {
  return (dispatch) => {
    dispatch({
      type: types.INPUT_ANIO_CHANGED,
      value: e.target.value
    });
  }
}



export function agregarPeriodo(nombrePeriodo, anioPeriodo, rangoInicio = 0, rangoFin = 12) {
  return (dispatch) => {
    debugger;
    const periodo = {
      nombre: nombrePeriodo,
      anio: anioPeriodo,
      rango: [rangoInicio, rangoFin],
      cuentas: []
    };
    dispatch({
      type: types.AGREGAR_PERIODO,
      periodo
    });
  }
}
