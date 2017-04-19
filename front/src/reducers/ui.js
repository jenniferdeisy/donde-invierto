import * as t from '../constants/actionTypes';
import initialState from './initialState';
import {mergeDeep} from '../utils/UtilHelper';


export default function ui(state = initialState.ui, action) {
  let newState;

  switch (action.type) {
    case t.EMPRESA_SELECTED:
      newState = mergeDeep({}, state);
      newState.empresaSelected = action.empresa;
      return newState;
    case t.INPUT_EMPRESA_CHANGED:
      newState = Object.assign({}, state);
      newState.inputEmpresa = action.value;
      return newState;
    case t.INPUT_PERIODO_CHANGED:
      newState = Object.assign({}, state);
      newState.inputPeriodo = action.value;
      return newState;
    case t.INPUT_ANIO_CHANGED:
      newState = Object.assign({}, state);
      newState.inputAnio = action.value;
      return newState;

    case t.AGREGAR_PERIODO:
      newState = mergeDeep({}, state);
      newState.periodosPorAgregar.push(action.periodo);
      return newState;

    default:
      return state;

  }
}
