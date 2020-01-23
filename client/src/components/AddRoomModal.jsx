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
  Input,
  FormText,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";
import AddTable from "../icons/addtable.svg";
import { connect } from "react-redux";
import { addRoom } from "../actions/roomActions";
class AddRoomModal extends Component {
  state = {
    modal: false,
    //rID:"",
    rName: "",
    rStatus: "",
    rtypeID: "",
    postsAssets: []
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      rName: this.state.rName,
      rtypeID: this.state.rtypeID,
      rStatus: this.state.rStatus
    };

    this.props.addRoom(newItem);
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
                <Label for="rName">Name</Label>
                <Input
                  type="name"
                  name="rName"
                  id="rName"
                  placeholder="Ex:120-411-420"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rtypeID">Type</Label>
                <Input
                  type="name"
                  name="rtypeID"
                  id="rtypeID"
                  placeholder="assetment name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rStatus">Status</Label>
                <Input
                  type="select"
                  name="rStatus"
                  id="rStatus"
                  onChange={this.onDropdownSelected}
                >
                  <option value="0">1</option>
                  <option value="1">2</option>
                </Input>
              </FormGroup>
              <Button color="primary">Add</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  room: state.room
});
export default connect(mapStateToProps, { addRoom })(AddRoomModal);
