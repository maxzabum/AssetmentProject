import React, { Component, useState } from "react";
import "../../../src/AssetStyle.css";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import { Row, Col, Badge } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone
} from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import { getOwners, updateOwner } from "../../actions/ownerActions";
import { getUsers, updateUser } from "../../actions/userActions";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import AddOwnerModal from "../AddOwnerModal.jsx";
import AddStaffModal from "../AddStaffModal.jsx";
import PropTypes from "prop-types";

class AllTabPanes extends Component {
  state = {
    modal: false,
    _id: "",
    mUsername: "",
    mPassword: "",
    mMail: "",
    mPer: "",
    mTell: "",
    mGender: "",
    mStatus: "",
    aSerial: "",
    aName: "",
    aStatus: "",
    curState: "1"
  };
  static propTypes = {
    auth: PropTypes.object.isRequired,
    getOwners: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
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
        if (this.state.curState === "1") {
          this.props.updateOwner(row);
        } else if (this.state.curState === "2") {
          this.props.updateUser(row);
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
    // let priceFilter;

    // const handleClick = () => {
    //   priceFilter({
    //     number: 2103,
    //     comparator: Comparator.GT
    //   });
    // };
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
        dataField: "pName",
        text: "ชื่อ - นามสกุล",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "pStatus",
        text: "สถานะการใช้งาน",
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
        editor: {
          type: Type.SELECT,
          options: [
            {
              value: "true",
              label: "ใช้งานได้"
            },
            {
              value: "false",
              label: "ไม่สามารถใช้งานได้"
            }
          ]
        },
        sort: true
      }
    ];
    const columnsUser = [
      // {
      //   headerAlign: "center",
      //   dataField: "_id",
      //   headerStyle: { width: "100px" },
      //   text: "Serial No.",

      //   sort: true
      // },
      {
        headerAlign: "center",
        dataField: "mUsername",
        text: "ชื่อผู้ใช้งาน",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "mPassword",
        text: "รหัสผ่าน",
        headerStyle: { width: "70px" },
        formatter: (cellContent, row, cell) => {
          for (let i = 0; i < 8; i++) {
            return <h6>*</h6>;
          }
        }
      },

      {
        headerAlign: "center",
        dataField: "mPer",
        text: "สิทธิ์การใช้งาน",
        headerStyle: { width: "70px" },
        formatter: (cellContent, row) => {
          if (row.mPer) {
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
      },
      {
        headerAlign: "center",
        dataField: "mTell",
        text: "เบอร์โทรศัพท์",
        headerStyle: { width: "70px" },

        sort: true
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
                      <div className="btn-add-asset">
                        <AddOwnerModal />
                      </div>
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
                      <div className="btn-add-asset">
                        <AddStaffModal />
                      </div>

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
                ผู้รับผิดชอบ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                ผู้ดูแลระบบ
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

// function customMatchFunc({ searchText, value, column, row }) {
//   if (typeof value !== "undefined") {
//     return value.startsWith(searchText);
//   }
//   return false;
// }

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
