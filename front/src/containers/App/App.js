import React, {PropTypes} from 'react';
import {Navbar, MenuItem, NavDropdown, NavItem, Nav, Grid} from 'react-bootstrap';
import 'App.scss';

const App = (props) =>
  <div>
    <Navbar>
      <Navbar.Header className="jam-logo-location">
        <Navbar.Brand className="jam-brand" >
          <a href="#">
            <img src={require("../../statics/images/nav_logo.png")}
                  className="nav-logo" />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Grid fluid>
      {props.children}
    </Grid>
  </div>;

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
