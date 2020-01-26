import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";
import "../../ReportPageStyle.css";
import { getOwners } from "../../actions/ownerActions";
import PropTypes from "prop-types";

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
    const newItem = {
      aSerial: this.state.aSerial,
      aName: this.state.aName,
      aStatus: this.state.aStatus,
      aDate: this.state.aDate,
      aPrice: this.state.aPrice,
      aReason: this.state.aReason,
      aGet: this.state.aGet,
      pID: this.state.pID,
      cID: this.state.cID,
      rID: this.state.rID
    };
    this.props.addItem(newItem);

    this.toggle();
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
              <Button color="primary" onClick={this.pdfGenerate}>
                Add
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
