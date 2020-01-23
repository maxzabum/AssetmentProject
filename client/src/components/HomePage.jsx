import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import "../App.css";
import LogoIT from "../icons/logo-it.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class HomePage extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const authMenu = (
      <Fragment>
        <Row className="main-home-but1">
          <Link to="/assetP">
            <div className="btn-home btn-go-asset" to="/assetP">
              <span>Assetment Manage</span>
            </div>
          </Link>
        </Row>
        <Row className="main-home-but">
          <Link to="/userP">
            <div className="btn-home btn-go-user">
              <span>HOVER ME</span>
            </div>
          </Link>
        </Row>
        <Row className="main-home-but">
          <Link to="/reportP">
            <div className="btn-home btn-go-other">
              <span>Report Management</span>
            </div>
          </Link>
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
              <div className="sandbox sandbox-correct-pronounciation">
                <h1 className="heading heading-correct-pronounciation">
                  Asset
                  <em>Management</em>
                  System
                </h1>
              </div>
            </Row>
            {isAuthenticated ? authMenu : guestMenu}
          </Col>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, null)(HomePage);
