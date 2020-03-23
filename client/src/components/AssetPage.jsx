import React, { Component, useState, Fragment } from "react";
import "../AssetStyle.css";

import { Row, Col, Badge } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone
} from "react-bootstrap-table2-paginator";
import filterFactory, { dateFilter } from "react-bootstrap-table2-filter";

import AddAssetModal from "./AddAssetModal.jsx";
import AddFixModal from "./AddFixModal.jsx";
import AddTypeModal from "./AddTypeModal.jsx";
import AddRoomModal from "./AddRoomModal.jsx";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../actions/itemActions";
import { getItemTypes, updateType } from "../actions/itemTypeActions";
import { getRooms, deleteRoom, updateRoom } from "../actions/roomActions";
import { getFixs, updateFix } from "../actions/fixActions";
import PropTypes from "prop-types";
import ReportAssetBut from "./reportButs/ReportAssetBut";

class AssetPage extends Component {
  state = {
    curState: "1"
  };
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    getItemTypes: PropTypes.func.isRequired,
    getRooms: PropTypes.func.isRequired,
    getFixs: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired,
    itemType: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    fixAsset: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  onDeleteClick = row => {
    // this.props.deleteItem(row._id);
    // this.props.deleteRoom(row._id);
    console.log("fdsfsd" + row);
  };
  toggleInStock = row => {
    console.log(row.status);
  };
  afterSaveCell = (oldValue, newValue, row, column, done) => {
    setTimeout(() => {
      if (window.confirm("Do you want to accep this change?")) {
        done(true);
        if (this.state.curState === "1") {
          this.props.updateItem(row);
        } else if (this.state.curState === "2") {
          this.props.updateFix(row);
          console.log(row);
        } else if (this.state.curState === "3") {
          this.props.updateType(row);
          console.log(row);
        } else if (this.state.curState === "4") {
          this.props.updateRoom(row);
          console.log(row);
        }
      } else {
        done(false);
      }
    }, 200);
    return { async: true };
  };

  componentDidMount() {
    this.props.getItems();
    this.props.getItemTypes();
    this.props.getRooms();
    this.props.getFixs();
  }
  setOptions() {}
  render() {
    //let priceFilter;

    // const optionStatus = [
    //   { value: 0, label: "good" },
    //   { value: 1, label: "Bad" },
    //   { value: 2, label: "unknown" }
    // ];

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
      totalSize: this.props.item.items.length
    };

    const columns = [
      {
        dataField: "aName",
        text: "ชื่อครุภัณฑ์",
        sort: true,
        headerStyle: { width: "15%" },
        headerAlign: "center"
      },
      {
        dataField: "aSerial",
        headerAlign: "center",
        text: "หมายเลขครุภัณฑ์",
        headerStyle: { width: "5%" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "rID",
        text: "ชื่อห้อง",
        // headerStyle: { width: "180px" },
        formatter: (cellContent, row) => {
          for (var i = 0; i < this.props.room.items.length; i++) {
            if (row.rID === this.props.room.items[i]._id) {
              return <Fragment>{this.props.room.items[i].rName}</Fragment>;
            }
          }
          return (
            <h6>
              <Fragment>Errors</Fragment>;
            </h6>
          );
        },

        sort: true,
        editor: {
          type: Type.SELECT,
          getOptions: (setOptions, { row, column }) => {
            const dataRoom = this.props.room.items;

            const dataRoom2 = [];
            for (let i = 0; i < dataRoom.length; i++) {
              dataRoom2.push({
                value: dataRoom[i]._id,
                label: dataRoom[i].rName
              });
            }

            return dataRoom2;
          }
        }
      },
      {
        headerAlign: "center",
        dataField: "aDate",
        sort: true,
        filter: dateFilter({ className: "filter-form" }),
        headerStyle: { width: "20%" },
        text: "วัน/เดือน/ปี ที่ซื้อ",
        editor: {
          type: Type.DATE
        },
        formatter: cell => {
          let dateObj = cell;
          if (typeof cell !== "object") {
            dateObj = new Date(cell);
          }
          return `${("0" + dateObj.getUTCDate()).slice(-2)}/${(
            "0" +
            (dateObj.getUTCMonth() + 1)
          ).slice(-2)}/${dateObj.getUTCFullYear()}`;
        }
      },
      {
        headerAlign: "center",
        dataField: "aPrice",
        text: "ราคาครุภัณฑ์(หน่วย)",
        // headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "cID",
        text: "ประเภทครุภัณฑ์",
        headerStyle: { width: "8%" },
        formatter: (cellContent, row) => {
          for (var i = 0; i < this.props.itemType.items.length; i++) {
            if (row.cID === this.props.itemType.items[i]._id) {
              return <Fragment>{this.props.itemType.items[i].cName}</Fragment>;
            }
          }
          return (
            <h6>
              <Fragment>Errors</Fragment>;
            </h6>
          );
        },
        sort: true,
        editor: {
          type: Type.SELECT,
          getOptions: (setOptions, { row, column }) => {
            const dataType = this.props.itemType.items;

            const dataType2 = [];
            for (let i = 0; i < dataType.length; i++) {
              dataType2.push({
                value: dataType[i]._id,
                label: dataType[i].cName
              });
            }

            return dataType2;
          }
        }
      },
      {
        headerAlign: "center",
        dataField: "aSerial",
        text: "คิวอาร์โค้ด",
        formatter: imageFormatter,
        headerStyle: { width: "5%" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "aReason",
        text: "สาเหตุที่แทงจำหน่าย",
        isDummyField: true,
        // headerStyle: { width: "70px" },

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "aGet",
        text: "วิธีที่ได้รับครุภัณฑ์",
        headerStyle: { width: "7%" },
        formatter: (cellContent, row) => {
          if (row.aGet) {
            return (
              <h6>
                <Badge color="primary">ซื้อ</Badge>
              </h6>
            );
          } else {
            return (
              <h6>
                <Badge color="warning">บริจาค</Badge>
              </h6>
            );
          }
        },
        editor: {
          type: Type.SELECT,
          options: [
            {
              value: "true",
              label: "ซื้อ"
            },
            {
              value: "false",
              label: "บริจาค"
            }
          ]
        },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "aStatus",
        text: "สภาพครุภัณฑ์",
        headerStyle: { width: "7%" },
        formatter: (cellContent, row) => {
          if (row.aStatus === "1") {
            return (
              <h6>
                <Badge color="success">ปกติ</Badge>
              </h6>
            );
          } else if (row.aStatus === "2") {
            return (
              <h6>
                <Badge color="danger">ชำรุด</Badge>
              </h6>
            );
          } else if (row.aStatus === "3") {
            return (
              <h6>
                <Badge color="info">เสื่อมสภาพ</Badge>
              </h6>
            );
          } else if (row.aStatus === "4") {
            return (
              <h6>
                <Badge color="warning">ส่งซ่อม</Badge>
              </h6>
            );
          }
          return (
            <h6>
              <Badge color="secondary">แทงจำหน่าย</Badge>
            </h6>
          );
        },
        editor: {
          type: Type.SELECT,
          options: [
            {
              value: "1",
              label: "ปกติ"
            },
            {
              value: "2",
              label: "ชำรุด"
            },
            {
              value: "3",
              label: "เสื่อมสภาพ"
            },
            {
              value: "4",
              label: "ส่งซ่อม"
            },
            {
              value: "5",
              label: "แทงจำหน่าย"
            }
          ]
        },
        sort: true
      }
    ];
    const columnsFix = [
      // {
      //   dataField: "_id",
      //   text: "ID",
      //   sort: true,
      //   headerStyle: { width: "150px" },
      //   headerAlign: "center"
      // },
      {
        headerAlign: "center",
        dataField: "aID",
        headerStyle: { width: "100px" },
        text: "หมายเลขครุภัณฑ์",
        formatter: (cellContent, row) => {
          for (var i = 0; i < this.props.item.items.length; i++) {
            if (row.aID === this.props.item.items[i]._id) {
              return <Fragment>{this.props.item.items[i].aSerial}</Fragment>;
            }
          }
          return (
            <h6>
              <Fragment>Errors</Fragment>;
            </h6>
          );
        },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "fReason",
        text: "สาเหตุที่ส่งซ่อม",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "fLocation",
        // dataField: "fPicCard",
        // dataField: "fFixDate",
        // dataField: "fBillPic",
        text: "สถานที่ส่งซ่อมครุภัณฑ์",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "fPrice",
        text: "ราคาซ่อมครุภัณฑ์",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "fFixDate",
        text: "วัน/เดือน/ปี ที่ส่งซ่อม",
        headerStyle: { width: "40px" },
        editor: {
          type: Type.DATE
        },
        // formatter: cell => {
        //   let dateObj = cell;
        //   if (typeof cell !== "object") {
        //     dateObj = new Date(cell);
        //   }
        //   return `${("0" + dateObj.getUTCDate()).slice(-2)}/${(
        //     "0" +
        //     (dateObj.getUTCMonth() + 1)
        //   ).slice(-2)}/${dateObj.getUTCFullYear()}`;
        // },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "fStatus",
        text: "สภาพครุภัณฑ์หลังการส่งซ่อม",
        headerStyle: { width: "70px" },
        sort: true
      }
    ];
    const columnsType = [
      {
        headerAlign: "center",
        dataField: "cID",
        headerStyle: { width: "100px" },
        text: "รหัสประเภทครุภัณฑ์",

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "cName",
        text: "ชื่อประเภทครุภัณฑ์",
        headerStyle: { width: "70px" },
        sort: true
      },
      {
        headerAlign: "center",
        dataField: "cStatus",
        text: "สถานะการใช้งาน",
        headerStyle: { width: "70px" },
        formatter: (cellContent, row) => {
          if (row.cStatus) {
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
          getOptions: (setOptions, { row, column }) => {
            return [
              {
                value: true,
                label: "ใช้งานได้"
              },
              {
                value: false,
                label: "ไม่สามารถใช้งานได้"
              }
            ];
          }
        },
        sort: true
      }
    ];
    const columnsRoom = [
      {
        dataField: "rName",
        text: "ชื่อห้อง",
        sort: true,
        headerStyle: { width: "150px" },
        headerAlign: "center"
      },
      {
        headerAlign: "center",
        dataField: "rtypeID",
        headerStyle: { width: "100px" },
        text: "ประเภทห้อง",

        sort: true
      },
      {
        headerAlign: "center",
        dataField: "rStatus",
        text: "สถานะการใช้งาน",
        headerStyle: { width: "70px" },
        formatter: (cellContent, row) => {
          if (row.rStatus) {
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

        sort: true,
        editor: {
          type: Type.SELECT,
          getOptions: (setOptions, { row, column }) => {
            return [
              {
                value: true,
                label: "ใช้งานได้"
              },
              {
                value: false,
                label: "ไม่สามารถใช้งานได้"
              }
            ];
          }
        }
      }
    ];
    // const selectRow = {
    //   mode: "radio",
    //   clickToSelect: true,
    //   onSelect: (row, isSelect, rowIndex, e) => {
    //     console.log(row.id);
    //     console.log(isSelect);
    //     console.log(rowIndex);
    //     console.log(e);
    //   },
    //   onSelectAll: (isSelect, rows, e) => {
    //     console.log(isSelect);
    //     console.log(rows);
    //     console.log(e);
    //   },
    //   hideSelectColumn: true,
    //   bgColor: "#00BFFF",
    //   clickToEdit: true
    // };

    const assetTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="_id"
          columns={columns}
          data={this.props.item.items}
          search
        >
          {toolkitprops => (
            <Row>
              <Col sm={{ size: 10, offset: 1 }} className="left-panel">
                <Row>
                  <Col className="text-header-table">
                    <h1 className="text-header-color">ข้อมูลครุภัณฑ์</h1>
                  </Col>
                  <Col>
                    <div className="find-table">
                      <ReportAssetBut />
                      <div className="btn-add-asset">
                        <AddAssetModal />
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
    const fixTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="_id"
          columns={columnsFix}
          data={this.props.fixAsset.items}
          search
        >
          {toolkitprops => (
            <Row>
              <Col sm={{ size: 10, offset: 1 }} className="left-panel">
                <Row>
                  <Col className="text-header-table">
                    <h1 className="text-header-color">ข้อมูลการส่งซ่อม</h1>
                  </Col>
                  <Col>
                    <div className="find-table">
                      <div className="btn-add-asset">
                        <AddFixModal value="addFix" />
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
    const typeTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="_id"
          columns={columnsType}
          data={this.props.itemType.items}
          search
        >
          {toolkitprops => (
            <Row>
              <Col sm={{ size: 10, offset: 1 }} className="left-panel">
                <Row>
                  <Col className="text-header-table">
                    <h1 className="text-header-color">ข้อมูลประเภทครุภัณฑ์</h1>
                  </Col>
                  <Col>
                    <div className="find-table">
                      <div className="btn-add-asset">
                        <AddTypeModal />
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
    const roomTable = ({ paginationProps, paginationTableProps }) => (
      <div>
        <ToolkitProvider
          keyField="_id"
          columns={columnsRoom}
          data={this.props.room.items}
          search
        >
          {toolkitprops => (
            <Row>
              <Col sm={{ size: 10, offset: 1 }} className="left-panel">
                <Row>
                  <Col className="text-header-table">
                    <h1 className="text-header-color">ข้อมูลห้อง</h1>
                  </Col>
                  <Col>
                    <div className="find-table">
                      <div className="btn-add-asset">
                        <AddRoomModal />
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
                className={classnames({ active: props.curState === "1" })}
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
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                ข้อมูลประเภทครุภัณฑ์
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  toggle("4");
                }}
              >
                ข้อมูลห้อง
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab} className="body-con">
            <TabPane tabId="1">
              <PaginationProvider pagination={paginationFactory(options)}>
                {assetTable}
              </PaginationProvider>
            </TabPane>
            <TabPane tabId="2">
              <PaginationProvider pagination={paginationFactory(options)}>
                {fixTable}
              </PaginationProvider>
            </TabPane>
            <TabPane tabId="3">
              <PaginationProvider pagination={paginationFactory(options)}>
                {typeTable}
              </PaginationProvider>
            </TabPane>
            <TabPane tabId="4">
              <PaginationProvider pagination={paginationFactory(options)}>
                {roomTable}
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
  console.log(cell);
  //return <img style={{ width: 50 }} src={cell} />;
  return (
    <QRCode
      value={cell}
      size={65}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
      renderAs={"svg"}
    />
  );
}

// function customMatchFunc({ searchText, value, column, row }) {
//   if (typeof value !== "undefined") {
//     return value.startsWith(searchText);
//   }
//   return false;
// }
// function beforeSaveCell(oldValue, newValue, row, column, done) {
//   setTimeout(() => {
//     if (window.confirm("Do you want to accep this change?")) {
//       done(true);
//       console.log(row);
//       updateRoom(row);
//     } else {
//       done(false);
//     }
//   }, 200);
//   return { async: true };
// }
const mapStateToProps = state => ({
  item: state.item,
  itemType: state.itemType,
  room: state.room,
  fixAsset: state.fixAsset,
  auth: state.auth
});
export default connect(mapStateToProps, {
  getItems,
  deleteItem,
  getItemTypes,
  getRooms,
  getFixs,
  deleteRoom,
  updateRoom,
  updateFix,
  updateItem,
  updateType
})(AssetPage);
