import * as types from '../constants/actionTypes';

export function selectEmpresa(empresa) {
  return (dispatch) => {
    dispatch({
      type: types.EMPRESA_SELECTED,
      empresa
    })
  }
}
