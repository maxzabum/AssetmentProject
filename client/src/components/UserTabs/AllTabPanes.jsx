import React, { Component, useState, Fragment } from "react";
import "../../../src/AssetStyle.css";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { Container, Button, Row, Col, Badge } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone
} from "react-bootstrap-table2-paginator";
import filterFactory, {
  textFilter,
  selectFilter,
  numberFilter,
  Comparator,
  dateFilter
} from "react-bootstrap-table2-filter";
import { getOwners, updateOwner } from "../../actions/ownerActions";
import { getUsers, updateUser } from "../../actions/userActions";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";

import PropTypes from "prop-types";

class AllTabPanes extends Component {
  state = {
    modal: false,
    aSerial: "",
    aName: "",
    aSerial: "",
    aName: "",
    aStatus: "",
    curState: "1"
  };
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getOwners: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    // console.log("dddddddwqe", this.state.itemType.items);
  };
  afterSaveCell = (oldValue, newValue, row, column, done) => {
    setTimeout(() => {
      if (window.confirm("Do you want to accep this change?")) {
        done(true);
        if (this.state.curState == "1") {
          this.props.updateOwner(row);
        } else if (this.state.curState == "2") {
          this.props.updateUser(row);
          console.log(row);
        }
      } else {
        done(false);
      }
    }, 200);
    return { async: true };
  };
  onDeleteClick = row => {
    // this.props.deleteItem(row._id);
    // this.props.deleteRoom(row._id);
    // console.log("fdsfsd" + row._id);
  };
  toggleInStock = row => {
    console.log(row.status);
  };

  componentDidMount() {
    this.props.getOwners();
    this.props.getUsers();
  }

  render() {
    let priceFilter;

    const handleClick = () => {
      priceFilter({
        number: 2103,
        comparator: Comparator.GT
      });
    };
    const { SearchBar } = Search;
    const options = {
      custom: true,
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      totalSize: this.props.owners.items.length
    };

    const columnsOwner = [
      {
        headerAlign: "center",
        dataField: "_id",
        headerStyle: { width: "100px" },
        text: "Owner ID",

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "pName",
        text: "Name",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "pStatus",
        text: "Status",
        headerStyle: { width: "70px" },
        formatter: (cellContent, row) => {
          if (row.pStatus) {
            return (
              <h6>
                <Badge color="success">ใช้งานได้</Badge>
              </h6>
            );
          }
          return (
            <h6>
              <Badge color="secondary">ไม่สามารถใช้งานได้</Badge>
            </h6>
          );
        },
        sort: true
      }
    ];
    const columnsUser = [
      {
        headerAlign: "center",
        dataField: "_id",
        headerStyle: { width: "100px" },
        text: "Serial No.",

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mUsername",
        text: "Username",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mPassword",
        text: "Password",
        headerStyle: { width: "70px" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mName",
        text: "Name",
        headerStyle: { width: "70px" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mMail",
        text: "Email",
        headerStyle: { width: "70px" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mTell",
        text: "Telephon No.",
        headerStyle: { width: "70px" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mStatus",
        text: "Status",
        headerStyle: { width: "70px" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mPermission",
        text: "Permission",
        headerStyle: { width: "70px" },

        sort: true
      },
      {
        dataField: "link",
        text: "ACTION",
        headerStyle: { width: "100px" },
        formatter: this.GetActionFormat
      }
    ];
    const ownerTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="_id"
          columns={columnsOwner}
          data={this.props.owners.items}
          search
        >
          {toolkitprops => (
            <Row>
              <Col sm={{ size: 10, offset: 1 }} className="left-panel">
                <Row>
                  <Col className="text-header-table">
                    <h1 className="text-header-color">Type Table</h1>
                  </Col>
                  <Col>
                    <div className="find-table">
                      <div className="btn-add-asset"></div>

                      <SearchBar
                        className="form-find-table"
                        {...toolkitprops.searchProps}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <BootstrapTable
                      bordered={false}
                      striped
                      hover
                      {...toolkitprops.baseProps}
                      {...paginationTableProps}
                      filter={filterFactory()}
                      filterPosition="top"
                      className="show-table"
                      cellEdit={cellEditFactory({
                        mode: "click",
                        beforeSaveCell: this.afterSaveCell.bind(this)
                      })}
                    />
                    <PaginationListStandalone {...paginationProps} />
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </ToolkitProvider>
      </div>
    );
    const userTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="_id"
          columns={columnsUser}
          data={this.props.users.items}
          search
        >
          {toolkitprops => (
            <Row>
              <Col sm={{ size: 10, offset: 1 }} className="left-panel">
                <Row>
                  <Col className="text-header-table">
                    <h1 className="text-header-color">Type Table</h1>
                  </Col>
                  <Col>
                    <div className="find-table">
                      <div className="btn-add-asset"></div>

                      <SearchBar
                        className="form-find-table"
                        {...toolkitprops.searchProps}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <BootstrapTable
                      bordered={false}
                      striped
                      hover
                      {...toolkitprops.baseProps}
                      {...paginationTableProps}
                      filter={filterFactory()}
                      filterPosition="top"
                      className="show-table"
                      cellEdit={cellEditFactory({
                        mode: "click",
                        beforeSaveCell: this.afterSaveCell.bind(this)
                      })}
                    />
                    <PaginationListStandalone {...paginationProps} />
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </ToolkitProvider>
      </div>
    );
    const Example = props => {
      const [activeTab, setActiveTab] = useState(this.state.curState);

      const toggle = tab => {
        this.state.curState = tab;
        if (activeTab !== this.state.curState) {
          setActiveTab(this.state.curState);

          console.log("dasdasd", this.state.curState);
        }
      };

      return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                ข้อมูลครุภัณฑ์
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                ข้อมูลการส่งซ่อมครุภัณฑ์
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} className="body-con">
            <TabPane tabId="1">
              <PaginationProvider pagination={paginationFactory(options)}>
                {ownerTable}
              </PaginationProvider>
            </TabPane>
            <TabPane tabId="2">
              <PaginationProvider pagination={paginationFactory(options)}>
                {userTable}
              </PaginationProvider>
            </TabPane>
          </TabContent>
        </div>
      );
    };

    return (
      <main>
        <Example curState={this.state.curState}></Example>
      </main>
    );
  }
}
function imageFormatter(cell, row) {
  var QRCode = require("qrcode.react");
  //return <img style={{ width: 50 }} src={cell} />;
  return <QRCode value={"cell"} size={50} />;
}

function customMatchFunc({ searchText, value, column, row }) {
  if (typeof value !== "undefined") {
    return value.startsWith(searchText);
  }
  return false;
}

const mapStateToProps = state => ({
  auth: state.auth,
  owners: state.owners,
  users: state.users
});
export default connect(mapStateToProps, {
  getOwners,
  getUsers,
  updateOwner,
  updateUser
})(AllTabPanes);
