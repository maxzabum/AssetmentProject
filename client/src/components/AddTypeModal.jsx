import React, { useState, Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addType } from "../actions/itemTypeActions";
class AddTypeModal extends Component {
  state = {
    modal: false,
    cID: "",
    cName: "",
    cStatus: ""
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
  };

  // componentDidMount() {
  //   const urlAssets = "/api/assets";
  //   fetch(urlAssets, {
  //     method: "GET"
  //   })
  //     .then(response => response.json())
  //     .then(postsAssets => {
  //       if (this._isMounted) {
  //         this.setState({ postsAssets, postsAssets });
  //       }
  //     });
  // }

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      cID: this.state.cID,
      cName: this.state.cName,
      cStatus: this.state.cStatus
    };

    this.props.addType(newItem);
    this.toggle();
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onDropdownSelected = f => {
    console.log("THE VAL", f.target.value);

    this.setState({ [f.target.name]: f.target.value });

    //here you will see the current selected value of the select input
  };
  render() {
    return (
      <div>
        <Button className="btn-add-asset" color="success" onClick={this.toggle}>
          Add
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Assetment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="cID">ID</Label>
                <Input
                  type="name"
                  name="cID"
                  id="cID"
                  placeholder="Ex:120-411-420"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cName">Name of type</Label>
                <Input
                  type="name"
                  name="cName"
                  id="cName"
                  placeholder="Type name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cStatus">Status</Label>
                <Input
                  type="select"
                  name="cStatus"
                  id="cStatus"
                  onChange={this.onDropdownSelected}
                >
                  <option value={true}>ใช้งานได้</option>
                  <option value={false}>ไม่สามารถใช้งานได้</option>
                </Input>
              </FormGroup>
              <Button color="primary">Add</Button>
              <Button color="danger">Cancel</Button>
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
export default connect(mapStateToProps, { addType })(AddTypeModal);
