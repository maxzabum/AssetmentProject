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
class AddFixModal extends Component {
  state = {
    modal: false,
    aSerial: "",
    aName: "",
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
    this.state.fPic = URL.createObjectURL(event.target.files[0]);
    // console.log("THE VAL", event.target.files[0]);
  };
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      aSerial: this.state.aSerial,
      aName: this.state.aName,
      aID: this.state.aID,
      fReason: this.state.fReason,
      fStatus: this.state.fStatus,
      fFixDate: this.state.fFixDate,

      fResult: this.state.fResult,
      fPrice: this.state.fPrice,
      dateVar: this.state.dateVar
    };
    const newItemImg = {
      fPicCard: this.state.fPicCard,
      fBillPic: this.state.fBillPic,
      fPic: this.state.fPic
    };
    this.props.addFix({ newItem, newItemImg });
    this.toggle();
  };
  onDropdownSelected = f => {
    console.log("THE VAL", f.target.value);

    this.setState({ [f.target.name]: f.target.value });

    //here you will see the current selected value of the select input
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("THE VAL", e.target.value);
  };
  render() {
    const dataAsset = this.state.postsAssets;
    const listAssets = dataAsset.map(data => (
      <option value={data._id}>{data.aSerial}</option>
    ));
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
                <Label for="aID">Serial No.</Label>
                <Input
                  type="select"
                  name="aID"
                  id="aID"
                  onChange={this.onDropdownSelected}
                >
                  {listAssets}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="name"
                  name="aName"
                  id="aName"
                  placeholder="assetment name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Reason</Label>
                <Input
                  type="textarea"
                  name="fReason"
                  id="fReason"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fPic">Assetment Picture</Label>
                <Input
                  type="file"
                  name="fPic"
                  id="fPic"
                  onChange={this.fileChangedHandler}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Location</Label>
                <Input
                  type="textarea"
                  name="fLocation"
                  id="fLocation"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="fPicCard">ฺBusiness card</Label>
                <Input
                  type="file"
                  name="fPicCard"
                  id="fPicCard"
                  onChange={this.fileChangedHandler2}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Date Varenty</Label>
                <Input
                  type="date"
                  name="dateVar"
                  id="dateVar"
                  placeholder="date placeholder"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Fix date</Label>
                <Input
                  type="date"
                  name="fFixDate"
                  id="fFixDate"
                  placeholder="date placeholder"
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Price</Label>
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
                <Label for="fBillPic">File</Label>
                <Input
                  type="file"
                  name="fBillPic"
                  id="fBillPic"
                  onChange={this.fileChangedHandler3}
                />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
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
  fixAsset: state.fixAsset
});
export default connect(mapStateToProps, { addFix })(AddFixModal);
