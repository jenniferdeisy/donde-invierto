import * as types from '../constants/dataTypes';
import Mocker from '../mocks/dataMock';

export function loadData(quantity) {
  return (dispatch) => {
    dispatch({
      type: types.INITIAL_DATA_REQUEST
    });

    const empresas = Mocker.generateEmpresas(quantity);

    dispatch({
      type: types.INITIAL_DATA_SUCCESS,
      empresas
    });
  }
}
