// Set up your root reducer here...
import { combineReducers } from 'redux';

import ui from './ui';
import data from './data';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';


const rootReducer = combineReducers({
  ui,
  data,
  loadingBar: loadingBarReducer,
  routing: routerReducer
});

export default rootReducer;
