import * as t from '../constants/actionTypes';
import initialState from './initialState';
import {mergeDeep} from '../utils/UtilHelper';


export default function ui(state = initialState.ui, action) {
  let newState;

  switch (action.type) {
    case t.INITIAL_LOAD:
      newState = mergeDeep({}, state);
      newState.loaded = true;
      return newState;

    default:
      return state;

  }
}
