import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as dataActions from '../../actions/dataActions';
import * as uiActions from '../../actions/uiActions';
import {bindActionCreators} from 'redux';
import Periodos from './Periodos'

class CargaEmpresa extends Component  {

  render() {
    return (
      <div>
        <form onSubmit={this.props.dataActions.cargarEmpresa}>
          <input type="text"
                  placeholder="Nombre Empresa"
                  onChange={this.props.uiActions.inputEmpresaChange}
                  value={this.props.inputEmpresa} />
          <br />
          <Periodos agregarPeriodo={this.props.uiActions.agregarPeriodo}
                    onInputPeriodoChange={this.props.uiActions.inputPeriodoChange}
                    onInputAnioChange={this.props.uiActions.inputAnioChange}
                    periodos={this.props.periodosYaAgregados}
                    inputPeriodoValue={this.props.inputPeriodo}
                    inputAnioValue={this.props.inputAnio} />
        </form>
      </div>
    )
  }
}


  function mapStateToProps(state) {
    return {
      inputEmpresa: state.ui.inputEmpresa,
      inputPeriodo: state.ui.inputPeriodo,
      periodosYaAgregados: state.ui.periodosPorAgregar
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      dataActions: bindActionCreators(dataActions, dispatch),
      uiActions: bindActionCreators(uiActions, dispatch),
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CargaEmpresa);
