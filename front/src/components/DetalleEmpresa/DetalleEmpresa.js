import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './DetalleEmpresa.scss';

const DetalleEmpresa = (props) =>
  <div className="DetalleEmpresa">
    <Row>
      <Col lg={12} md={12} sm={12} xs={12} className="detalle-nombre-empresa">
        {props.empresa.nombre}
      </Col>
      {
        props.empresa.periodos &&
        props.empresa.periodos.map(periodo =>
        <div className="periodo">
          <Col lg={periodo.rango[1] - periodo.rango[0]} md={periodo.rango[1] - periodo.rango[0]} sm={12} xs={12}>
            {periodo.nombre} : {periodo.anio}
          </Col>
        </div>
      )}
    </Row>
  </div>;

export default DetalleEmpresa;
