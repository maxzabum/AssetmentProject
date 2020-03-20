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
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UpdateInfoModal from "./UpdateInfoModal";
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
        <LogoutBut />
        <UpdateInfoModal />
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <LoginBut />
      </Fragment>
    );
    return (
      // <div>
      //   <Navbar mb="1" color="light" light expand="lg">
      //     <NavbarBrand href="/">Home</NavbarBrand>
      //     <NavbarToggler onClick={this.toggle} />
      //     <Collapse isOpen={this.state.isOpen} className="left-bar" navbar>
      //       <Nav navbar>{isAuthenticated ? authLinks : guestLinks}</Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">News</Typography>
            {/* <div className="btntest">
              <Button color="inherit">Login</Button>
            </div> */}
            {isAuthenticated ? authLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);
