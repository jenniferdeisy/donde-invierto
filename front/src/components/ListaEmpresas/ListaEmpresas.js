import React, {PropTypes, Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import './ListaEmpresas.scss';

export default class ListaEmpresas extends Component  {

  render() {
    const add = (a,b) => a+b;
    return (
      <div className="ListaEmpresas">
        {
          this.props.empresas.map(empresa =>
            <div className="single-empresa"
                  onClick={e => this.props.selectEmpresa(empresa)}>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <h1 className="nombre-empresa">
                    {empresa.nombre}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className="sub-info center">
                    {empresa.periodos.length}
                    <br />
                    períodos
                  </h3>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className="sub-info center">
                      {
                        empresa.periodos.map(periodo => periodo.cuentas.length).reduce(add, 0)
                      }
                      <br />
                     cuentas
                  </h3>
                </Col>
              </Row>
            </div>
          )
        }
      </div>
    )
  }
}
