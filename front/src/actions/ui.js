import * as types from '../constants/actionTypes';

export function checkboxClicked(e) {
  return (dispatch) => {
    dispatch({
      types.INITIAL_LOAD
    })
  }
}
