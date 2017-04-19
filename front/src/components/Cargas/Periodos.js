import React from 'react';
import {Button} from 'react-bootstrap';

const Periodos = (props) =>
  <div className="periodos">
    <input type="text"
            placeholder="Nombre del periodo a agregar"
            onChange={props.onInputPeriodoChange}
            value={props.inputPeriodoValue} />

    <input type="text"
            placeholder="Año del período"
            onChange={props.onInputAnioChange}
            value={props.inputAnioValue} />
    <input type="text"
            placeholder="Inicio del rango en meses" />
    <input type="text"
            placeholder="Fin del rango en meses" />
    <Button onClick={e => props.agregarPeriodo(props.inputPeriodoValue,
                                                    props.inputAnioValue)} />
    {props.periodos.map(periodo => {
      return (
        <input type="text" value={periodo.nombre} readOnly />
      )
    })}
  </div>;

export default Periodos;
