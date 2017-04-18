import React, {PropTypes, Component} from 'react';
import {Navbar, MenuItem, NavDropdown, NavItem, Nav, Grid} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import * as dataActions from '../../actions/dataActions';
import {bindActionCreators} from 'redux';
import './App.scss';

class App extends Component {
  componentWillMount() {
    this.props.dataActions.loadData(20);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header className="jam-logo-location">
            <Navbar.Brand className="jam-brand" >
              <LinkContainer to="/">
                  <img src={require("../../statics/images/nav_logo.png")}
                        className="nav-logo" />
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Cargar" id="basic-nav-dropdown">
              <LinkContainer to="/cargar/empresa">
                <MenuItem eventKey={3.1}>Empresa</MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <Grid fluid>
          {this.props.children}
        </Grid>
      </div>
    )
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
