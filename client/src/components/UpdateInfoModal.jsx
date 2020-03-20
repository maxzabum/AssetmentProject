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
  Input,
  FormText
} from "reactstrap";
import { getUsers, updateUser } from "../actions/userActions";
import { connect } from "react-redux";
import { addOwner } from "../actions/ownerActions";
import { getOwners } from "../actions/ownerActions";
import PropTypes from "prop-types";

class UpdateInfoModal extends Component {
  controller = new AbortController();
  state = {
    modal: false,
    aSerial: "",
    mName: "",
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
      _id: this.props.auth.user._id,
      mUsername: this.state.mUsername,
      mName: this.state.mName,
      mMail: this.state.mMail,
      mGender: this.state.mGender,
      mTell: this.state.mTell
    };
    console.log(newItem);
    this.props.updateUser(newItem);
    this.toggle();
  };

  onDropdownSelected = e => {
    //console.log("THE VAL", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    //here you will see the current selected value of the select input
  };

  render() {
    // const authId = this.props.auth.user._id;
    // const dataUser = [];
    // for (let i = 0; i < this.props.users.items.length; i++) {
    //   if (this.props.users.items[i]._id == authId) {
    //     dataUser.push({
    //       value: dataUser[i]._id,
    //       label: dataUser[i].rName
    //     });
    //   }
    // }

    return (
      <div className="asd">
        <Button className="btntest" color="success" onClick={this.toggle}>
          เพิ่ม
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.className}
        >
          <ModalHeader toggle={this.toggle}>เพิ่มข้อมูลครุภัณฑ์</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="mUsername">ชื่อผู้ใช้</Label>
                <Input
                  type="text"
                  name="mUsername"
                  id="mUsername"
                  value={this.props.auth.user.mUsername}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mPassword">รหัสผ่าน</Label>
                <Input
                  type="password"
                  name="mPassword"
                  id="mPassword"
                  placeholder={this.props.auth.user.mPassword}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mName">ชื่อ - สกุล</Label>
                <Input
                  type="text"
                  name="mName"
                  id="mName"
                  placeholder={this.props.auth.user.mName}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mTell">เบอร์โทรศัพท์</Label>
                <Input
                  type="text"
                  name="mTell"
                  id="mTell"
                  placeholder={this.props.auth.user.mTell}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mPic">รูปภาพ</Label>
                <Input
                  type="file"
                  name="mPic"
                  id="mPic"
                  onChange={this.fileChangedHandler3}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="mMail">อีเมล</Label>
                <Input
                  type="text"
                  name="mMail"
                  id="mMail"
                  placeholder={this.props.auth.user.mMail}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mGender">เพศ</Label>
                <Input
                  type="select"
                  name="mGender"
                  id="mGender"
                  onChange={this.onDropdownSelected}
                >
                  <option value="0">ชาย</option>
                  <option value="1">หญิง</option>
                  <option value="2">อื่นๆ</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="mStatus">สถานะ</Label>
                <Input
                  type="select"
                  name="mStatus"
                  id="mStatus"
                  onChange={this.onDropdownSelected}
                >
                  <option value="false">ไม่มีสิทธิ์ใช้งาน</option>
                  <option value="true">มีสิทธิ์ใช้งาน</option>
                </Input>
              </FormGroup>

              <Button color="primary">เพิ่ม</Button>
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
export default connect(mapStateToProps, { updateUser })(UpdateInfoModal);
