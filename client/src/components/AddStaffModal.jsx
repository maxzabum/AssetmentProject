import React, { Component } from "react";
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
import { addUser } from "../actions/userActions";
import { getOwners } from "../actions/ownerActions";
import PropTypes from "prop-types";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback
} from "availity-reactstrap-validation";
class AddStaffModal extends Component {
  controller = new AbortController();
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

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      mUsername: this.state.mUsername,
      mPassword: this.state.mPassword,
      mPer: this.state.mPer,
      mTell: this.state.mTell
    };
    this.props.addUser(newItem);

    this.toggle();
  };
  handleValidSubmit = (e, values) => {
    this.setState({
      mUsername: values.mUsername,
      mPassword: values.mPassword,

      mTell: values.mTell,
      mPer: values.mPer
    });
    console.log("THE VAL", this.state);
    this.onSubmit(e);
  };
  onDropdownSelected = e => {
    //console.log("THE VAL", e.target.value);

    this.setState({ [e.target.name]: e.target.value });

    //here you will see the current selected value of the select input
  };

  render() {
    return (
      <div className="asd">
        <Button className="btn-add-asset" color="success" onClick={this.toggle}>
          เพิ่ม
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.className}
        >
          <ModalHeader toggle={this.toggle}>เพิ่มข้อมูลครุภัณฑ์</ModalHeader>
          <ModalBody>
            <AvForm onValidSubmit={this.handleValidSubmit}>
              <AvGroup>
                <Label for="mUsername">ชื่อผู้ใช้</Label>
                <AvInput type="text" name="mUsername" id="mUsername" required />

                <AvFeedback>This is an error!</AvFeedback>
              </AvGroup>
              <AvGroup>
                <Label for="mPassword">รหัสผ่าน</Label>
                <AvInput
                  name="mPassword"
                  id="mPassword"
                  type="password"
                  placeholder="dasdasd"
                  required
                />
                <AvFeedback>This is an error!</AvFeedback>
              </AvGroup>

              <AvGroup>
                <Label for="mTell">เบอร์โทรศัพท์</Label>
                <AvInput name="mTell" id="mTell" required />
                <AvFeedback>This is an error!</AvFeedback>
              </AvGroup>
              <AvField
                type="select"
                name="mPer"
                label="Option"
                value="true"
                helpMessage="Idk, this is an example. Deal with it!"
              >
                <option value="true">มีสิทธิ์ใช้งาน</option>
                <option value="false">ไม่มีสิทธิ์ใช้งาน</option>
              </AvField>

              <Button>Submit</Button>
            </AvForm>
            {/* <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="mUsername">ชื่อผู้ใช้งาน</Label>
                <Input
                  type="username"
                  name="mUsername"
                  id="mUsername"
                  placeholder="Ex:120-411-420"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mPassword">รหัสผ่าน</Label>
                <Input
                  type="password"
                  name="mPassword"
                  id="mPassword"
                  placeholder="*******"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mTell">เบอร์โทรศัพท์</Label>
                <Input
                  type="name"
                  name="mTell"
                  id="mTell"
                  placeholder="062-xxxx-xxxx"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mName">ชื่อ - สกุล</Label>
                <Input
                  type="name"
                  name="mName"
                  id="mName"
                  placeholder="062-xxxx-xxxx"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mPer">สิทธิ์การใช้งาน</Label>
                <Input
                  type="select"
                  name="mPer"
                  id="mPer"
                  onChange={this.onDropdownSelected}
                >
                  <option value="true">มีสิทธิ์ใช้งาน</option>
                  <option value="false">ไม่มีสิทธิ์ใช้งาน</option>
                </Input>
              </FormGroup>

              <Button color="primary">เพิ่ม</Button>
            </Form> */}
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
export default connect(mapStateToProps, { addUser, getOwners })(AddStaffModal);
