import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";
import "../../ReportPageStyle.css";
import { getOwners } from "../../actions/ownerActions";
import PropTypes from "prop-types";
import jsPDF from "jspdf";
import "jspdf-autotable";
class ReportAssetBut extends Component {
  state = {
    modal: false,
    aSerial: "",
    aName: "",
    aStatus: "",
    aDate: "",
    aPrice: "",
    aReason: "",
    aGet: "",
    pID: "",
    cID: "",
    rID: "",
    aID: "",
    reportAss: "",
    postsType: [],
    postRoom: [],
    postOwner: [],
    itemType: []
  };
  static propTypes = {
    room: PropTypes.object.isRequired,
    itemType: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    fixAsset: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    getOwners: PropTypes.func.isRequired
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    // console.log("dddddddwqe", this.state.itemType.items);
  };

  componentDidMount() {
    //const dataOwner = this.state.postOwner;
    // const listTypes = dataType.map(data => (
    //   <option value={data._id}>{data.cID}</option>
    // ));
    // const listRooms = dataRoom.map(data => (
    //   <option value={data._id}>{data.rName}</option>
    // ));
    this.props.getOwners();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.aStatus);
    this.jsPdfGenaerator(this.state.reportAss);

    this.toggle();
  };

  jsPdfGenaerator = val => {
    const dataItem = this.props.item.items;
    this.dataItem.sort((a, b) => {
      return b.aDate.getTime() - a.aDate.getTime();
    });
    var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "landscape" });

    //doc.addFont("Petchlamoon-Regular.ttf", "custom", "normal");

    const filteredItems2 = dataItem.filter(item => item.aStatus == 2);
    const filteredItems3 = dataItem.filter(item => item.aStatus == 3);
    const filteredItems5 = dataItem.filter(item => item.aStatus == 5);
    if (val == 0) {
      for (var i = 0; i < filteredItems2.length; i++) {
        for (var j = 0; j < this.props.itemType.items.length; j++) {
          if (filteredItems2[i].cID == this.props.itemType.items[j]._id) {
            filteredItems2[i].cID = this.props.itemType.items[j].cName;
          }
        }
      }
      for (var i = 0; i < filteredItems3.length; i++) {
        for (var j = 0; j < this.props.itemType.items.length; j++) {
          if (filteredItems3[i].cID == this.props.itemType.items[j]._id) {
            filteredItems3[i].cID = this.props.itemType.items[j].cName;
          }
        }
      }
      for (var i = 0; i < filteredItems5.length; i++) {
        for (var j = 0; j < this.props.itemType.items.length; j++) {
          if (filteredItems5[i].cID == this.props.itemType.items[j]._id) {
            filteredItems5[i].cID = this.props.itemType.items[j].cName;
          }
        }
      }
      doc.autoTable({
        columnStyles: { aSerial: { halign: "center" } }, // European countries centered
        body: filteredItems2,
        columns: [
          { header: "หมายเลขครุภัณฑ์", dataKey: "aSerial" },
          { header: "ประเภทครุภัณฑ์", dataKey: "cID" },
          { header: "ชื่อครุภัณฑ์", dataKey: "aName" },
          { header: "สภาพครุภัณฑ์", dataKey: "aStatus" }
        ]
      });
      doc.autoTable({
        columnStyles: { europe: { halign: "center" } }, // European countries centered
        body: filteredItems3,
        columns: [
          { header: "หมายเลขครุภัณฑ์", dataKey: "aSerial" },
          { header: "ประเภทครุภัณฑ์", dataKey: "cID" },
          { header: "ชื่อครุภัณฑ์", dataKey: "aName" },
          { header: "สภาพครุภัณฑ์", dataKey: "aStatus" }
        ]
      });
      doc.autoTable({
        columnStyles5: { europe: { halign: "center" } }, // European countries centered
        body: filteredItems5,
        columns: [
          { header: "หมายเลขครุภัณฑ์", dataKey: "aSerial" },
          { header: "ประเภทครุภัณฑ์", dataKey: "cID" },
          { header: "ชื่อครุภัณฑ์", dataKey: "aName" },
          { header: "สภาพครุภัณฑ์", dataKey: "aStatus" }
        ]
      });

      console.log(dataItem);
      doc.save("geadd.pdf");
    } else if (val == 1) {
      // if (typeof cell !== "object") {
      //   dateObj = new Date(cell);
      // }
      // return `${("0" + dateObj.getUTCDate()).slice(-2)}/${(
      //   "0" +
      //   (dateObj.getUTCMonth() + 1)
      // ).slice(-2)}/${dateObj.getUTCFullYear()}`;
      for (var i = 0; i < filteredItems2.length; i++) {
        for (var j = 0; j < this.props.itemType.items.length; j++) {
          if (filteredItems2[i].cID == this.props.itemType.items[j]._id) {
            filteredItems2[i].cID = this.props.itemType.items[j].cName;
          }
        }
      }
      for (var i = 0; i < dataItem.length; i++) {
        if (typeof dataItem[i].aDate !== "object") {
          dataItem[i].aDate = new Date(dataItem[i].aDate);
          dataItem[i].aDate = `${("0" + dataItem[i].aDate.getUTCDate()).slice(
            -2
          )}/${("0" + (dataItem[i].aDate.getUTCMonth() + 1)).slice(
            -2
          )}/${dataItem[i].aDate.getUTCFullYear()}`;
        }
        // for (var j = 0; j < this.props.itemType.items.length; j++) {
        //   if (filteredItems2[i].cID == this.props.itemType.items[j]._id) {
        //     filteredItems2[i].cID = this.props.itemType.items[j].cName;
        //   }
        // }
      }
      doc.autoTable({
        columnStyles5: { europe: { halign: "center" } }, // European countries centered
        body: dataItem,
        columns: [
          { header: "หมายเลขครุภัณฑ์", dataKey: "aSerial" },
          { header: "ประเภทครุภัณฑ์", dataKey: "cID" },
          { header: "ชื่อครุภัณฑ์", dataKey: "aName" },
          { header: "ชื่อครุภัณฑ์", dataKey: "aDate" },
          { header: "สภาพครุภัณฑ์", dataKey: "aStatus" }
        ]
      });

      doc.save("geadd.pdf");
    }
  };
  onDropdownSelected = e => {
    //console.log("THE VAL", e.target.value);

    this.setState({ [e.target.name]: e.target.value });

    //here you will see the current selected value of the select input
  };

  render() {
    return (
      <div>
        <Button className="btn-reportAss" color="danger" onClick={this.toggle}>
          Print
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.className}
        >
          <ModalHeader toggle={this.toggle}>Assetment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Label for="reportAss">สภาพครุภัณฑ์</Label>
              <Input
                type="select"
                name="reportAss"
                id="reportAss"
                onChange={this.onDropdownSelected}
              >
                <option value="0">รายงานครุภัณฑ์ทั้งหมด</option>
                <option value="1">รายงานครุภัณฑ์ประจำปี</option>
                <option value="2">แทงจำหน่าย</option>
              </Input>

              <Button className="sbtn-reportAss" color="danger">
                Print
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  itemType: state.itemType,
  room: state.room,
  fixAsset: state.fixAsset,
  auth: state.auth,
  users: state.users,
  owners: state.owners
});
export default connect(mapStateToProps, { addItem, getOwners })(ReportAssetBut);
