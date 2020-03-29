import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";

import { connect } from "react-redux";
import { addFix } from "../actions/fixActions";
import PropTypes from "prop-types";
class AddFixModal extends Component {
  state = {
    modal: false,
    aSerial: "",
    // aName: "",
    aID: "",
    fReason: "",
    fStatus: "",
    fFixDate: "",
    fPicCard: "",
    fBillPic: null,
    fPic: null,
    fResult: "",
    fPrice: "",
    dateVar: "",
    postsAssets: []
  };
  static propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    fixAsset: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  fileChangedHandler = event => {
    this.state.fPicCard = URL.createObjectURL(event.target.files[0]);
    console.log("THE VAL", this.state.fPicCard);
  };
  fileChangedHandler2 = event => {
    this.state.fBillPic = URL.createObjectURL(event.target.files[0]);
    //console.log("THE VAL", event.target.files[0]);
  };
  fileChangedHandler3 = event => {
    this.state.fPic = event.target.files[0];
    console.log("THE VAL", this.state.fPic);
    // console.log("THE VAL", event.target.files[0]);
  };
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      // aName: this.state.aName,
      aID: this.state.aID,
      fReason: this.state.fReason,
      fStatus: this.state.fStatus,
      fFixDate: this.state.fFixDate,
      fResult: this.state.fResult,
      fPrice: this.state.fPrice,
      dateVar: this.state.dateVar,
      fPic: this.state.fPic
    };
    // const newItemImg = {
    //   fPicCard: this.state.fPicCard,
    //   fBillPic: this.state.fBillPic,
    //   fPic: this.state.fPic
    // };
    this.props.addFix(newItem);
    console.log(this.state);
    this.toggle();
  };
  onDropdownSelected = f => {
    console.log("THE VAL", f.target.value);

    this.setState({ [f.target.name]: f.target.value });

    //here you will see the current selected value of the select input
  };
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
          fPic: reader.result
        });
        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
      }; // reader.onload
    } // for
  }
  imghandleChange3(e) {
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
          fBillPic: reader.result
        });
        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
      }; // reader.onload
    } // for
  }
  imghandleChange2(e) {
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
          fPicCard: reader.result
        });
        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
      }; // reader.onload
    } // for
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("THE VAL", e.target.value);
  };
  render() {
    const dataAsset = this.props.item.items;
    const listAssets = dataAsset.map(data => (
      <option value={data._id}>{data.aSerial}</option>
    ));
    return (
      <div>
        <Button className="btn-add-asset" color="success" onClick={this.toggle}>
          เพิ่ม
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>เพิ่มข้อมูลการส่งซ่อม</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="aID">หมายเลขครุภัณฑ์</Label>
                <Input
                  type="select"
                  name="aID"
                  id="aID"
                  onChange={this.onDropdownSelected}
                >
                  {listAssets}
                </Input>
              </FormGroup>
              {/* <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="name"
                  name="aName"
                  id="aName"
                  placeholder="assetment name"
                  onChange={this.onChange}
                />
              </FormGroup> */}
              <FormGroup>
                <Label for="exampleText">สาเหตุที่ส่งซ่อม</Label>
                <Input
                  type="textarea"
                  name="fReason"
                  id="fReason"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fPic">รูปภาพครุภัณฑ์ที่ส่งซ่อม</Label>
                <Input
                  type="file"
                  name="fPic"
                  id="fPic"
                  onChange={this.imghandleChange.bind(this)}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">สถานที่ซ่อมครุภัณฑ์</Label>
                <Input
                  type="textarea"
                  name="fLocation"
                  id="fLocation"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fPicCard">ฺรูปถ่ายข้อมูลร้าน</Label>
                <Input
                  type="file"
                  name="fPicCard"
                  id="fPicCard"
                  onChange={this.imghandleChange2.bind(this)}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">วัน/เดือน/ปี ที่รับประกัน</Label>
                <Input
                  type="date"
                  name="dateVar"
                  id="dateVar"
                  placeholder="date placeholder"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">วัน/เดือน/ปี ที่ส่งซ่อม</Label>
                <Input
                  type="date"
                  name="fFixDate"
                  id="fFixDate"
                  placeholder="date placeholder"
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">ราคาซ่อมครุภัณฑ์</Label>
                <InputGroup>
                  <Input
                    type="price"
                    name="fPrice"
                    id="fPrice"
                    placeholder="0000000000"
                    onChange={this.onChange}
                  />
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Baht</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="fBillPic">รูปภาพใบเสร็จ</Label>
                <Input
                  type="file"
                  name="fBillPic"
                  id="fBillPic"
                  onChange={this.imghandleChange3.bind(this)}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <Button color="primary">เพิ่ม</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item,
  fixAsset: state.fixAsset,
  auth: state.auth,
  users: state.users
});
export default connect(mapStateToProps, { addFix })(AddFixModal);
