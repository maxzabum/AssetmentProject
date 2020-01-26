import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LogoutBut from "./auth/LogoutBut";
import LoginBut from "./auth/LoginModal";
import "../AssetStyle.css";
class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <label className="navbar-text mr-3">
            <h1>{user ? `Welcome ${user.username}` : "No User"}</h1>
          </label>
        </NavItem>
        <LogoutBut />
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <NavItem>
          <LoginBut />
        </NavItem>
      </Fragment>
    );
    return (
      <div>
        <Navbar mb="1" color="light" light expand="lg">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} className="left-bar" navbar>
            <Nav navbar>{isAuthenticated ? authLinks : guestLinks}</Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
