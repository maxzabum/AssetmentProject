import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { logout } from "../../actions/authActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
class LogoutBut extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    return (
      <NavLink onClick={this.props.logout}>
        <div className="btntest">
          <Button color="danger">Logout</Button>
        </div>
      </NavLink>
    );
  }
}

export default connect(null, { logout })(LogoutBut);
