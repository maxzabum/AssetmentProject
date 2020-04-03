import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import "../App.css";

import LogoIT from "../icons/logo-it.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getItems } from "../actions/itemActions";
import { getCheckAsset } from "../actions/checkAssetActions";
import { getItemTypes } from "../actions/itemTypeActions";
import { getRooms } from "../actions/roomActions";
import { getFixs } from "../actions/fixActions";
import { getOwners } from "../actions/ownerActions";
import { getUsers } from "../actions/userActions";
import Button from "@material-ui/core/Button";
class HomePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getOwners: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    getItemTypes: PropTypes.func.isRequired,
    getRooms: PropTypes.func.isRequired,
    getFixs: PropTypes.func.isRequired,
    getCheckAsset: PropTypes.func.isRequired
  };
  componentWillMount() {
    this.props.getItems();
    this.props.getItemTypes();
    this.props.getRooms();
    this.props.getFixs();
    this.props.getOwners();
    this.props.getUsers();
    this.props.getCheckAsset();
  }
  render() {
    const style = {
      background: "rgb(210,60,82)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 65,
      padding: "0 100px ",
      margin: "10px 10px",
      fontFamily: "EB Garamond",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
    };
    console.log(this.props.auth.user);
    const dataType = this.props.auth.items;
    const { isAuthenticated } = this.props.auth;
    const authMenu = (
      <Fragment>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Link to="/assetP">
              <div className="main-home-but1">
                <Button style={style}>จัดการข้อมูลครุภัณฑ์</Button>
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Link to="/userP">
              <div className="main-home-but2">
                <Button style={style}>จัดการผู้ใช้งาน</Button>
              </div>
            </Link>
          </Col>
        </Row>
      </Fragment>
    );
    const guestMenu = <Fragment></Fragment>;

    return (
      <div className="home">
        <Container className="con1 themed-container" fluid={true}>
          <Col sm={{ size: 10, offset: 1 }}>
            <Row className="main-home">
              <img className="img-home" src={LogoIT} alt="logo" />
            </Row>

            <Row className="main-home">
              <div className="font-home">ระบบบันทึกและตรวจนับครุภัณฑ์</div>
            </Row>

            <div>
              <div className="font-home">
                {isAuthenticated ? authMenu : guestMenu}
              </div>
            </div>
          </Col>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, {
  getItems,
  getItemTypes,
  getRooms,
  getFixs,
  getOwners,
  getUsers,
  getCheckAsset
})(HomePage);
