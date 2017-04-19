import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as dataActions from '../../actions/dataActions';
import {bindActionCreators} from 'redux';

class CargaEmpresa extends Component  {

  render() {
    return (
      <div>
        <form onSubmit={this.props.dataActions.cargarEmpresa}>
          <input type="text" placeholder="Nombre Empresa" />
          <input type="text" placeholder="Algo" />
          <input type="text" placeholder="Algo" />
        </form>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch) {
    return {
      dataActions: bindActionCreators(dataActions, dispatch)
    };
  }

  export default connect(
    null,
    mapDispatchToProps
  )(CargaEmpresa);
