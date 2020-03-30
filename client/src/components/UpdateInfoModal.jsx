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
  FormText,
  Row,
  Col
} from "reactstrap";
import { getUsers, updateUser } from "../actions/userActions";
import { connect } from "react-redux";
import { addOwner } from "../actions/ownerActions";
import { getOwners } from "../actions/ownerActions";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Container
} from "reactstrap";
class UpdateInfoModal extends Component {
  controller = new AbortController();
  state = {
    modal: false,
    aSerial: "",

    aStatus: "",
    aDate: "",
    aPrice: "",
    aReason: "",
    aGet: "",
    pID: "",
    cID: "",
    rID: "",
    files: [],

    base64: "",
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
  handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        base64: reader.result
      });
      //this.handleSubmit();
    };
  }
  imghandleChange(e) {
    // get the files
    let files = e.target.files;

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        let fileInfo = {
          base64: reader.result
        };
        this.setState({
          mPic: reader.result
        });
        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
      }; // reader.onload
    } // for
  }
  fileChangedHandler = event => {
    var base64Img = require("base64-img");
    this.state.fPicCard = event.target.files[0];
    var data = base64Img.base64Sync(event.target.files[0]);
    let idCardBase64 = "";
    var pic = event.target.files[0];
    this.getBase64(pic, result => {
      idCardBase64 = result;
      console.log("THE VAL", idCardBase64);
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      _id: this.props.auth.user._id,
      mUsername: this.state.mUsername,
      mName: this.state.mName,
      mMail: this.state.mMail,
      mGender: this.state.mGender,
      mTell: this.state.mTell,
      mPic: this.state.mPic,
      mPassword: this.state.mPassword
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
          แก้ไขข้อมูลส่วนตัว
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.className}
        >
          <ModalHeader toggle={this.toggle}>แก้ไขข้อมูลส่วนตัว</ModalHeader>
          {/* <img src={this.props.auth.user.mPic} /> */}

          <Container className="themed-container" fluid="sm">
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <CardImg
                  top
                  width="50%"
                  height="200"
                  src={this.props.auth.user.mPic}
                  alt="Card image cap"
                />
              </Col>
            </Row>
          </Container>
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
                  placeholder={"*******************"}
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
                  onChange={this.imghandleChange.bind(this)}
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
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
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
