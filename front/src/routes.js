import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import HomePage from './containers/HomePage/HomePage';
import CargaEmpresa from './components/Cargas/CargaEmpresa.js';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/cargar/empresa" component={CargaEmpresa}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
