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
  Row,
  Col,
  Alert,
  FormFeedback
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addType } from "../actions/itemTypeActions";
const initialState = {
  modal: false,
  cID: "",
  cName: "",
  cStatus: "",
  cID1: "",
  cID2: "",
  idError: { idErrorz: "", idErrorz2: "", nameError: "" }
};
class AddTypeModal extends Component {
  state = initialState;
  static propTypes = {
    room: PropTypes.object.isRequired,
    itemType: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    fixAsset: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    getOwners: PropTypes.func.isRequired
  };
  validate = () => {
    this.setState({ idErrorz: "", idErrorz2: "", nameError: "" });
    let idErrorz = "";
    let idErrorz2 = "";
    let nameError = "";
    if (this.state.cID1.length == 4) {
      this.state.cID += this.state.cID1 + "-";
    } else {
      idErrorz = "Error input";

      this.setState({ idErrorz });
      console.log("validEls" + idErrorz);
      console.log(this.state);
    }
    if (this.state.cID2.length == 3) {
      this.state.cID += this.state.cID2;
    } else {
      idErrorz2 = "Error input";

      this.setState({ idErrorz2 });
      console.log("validEls" + idErrorz2);
      console.log(this.state);
    }
    if (this.state.cName.length == 0) {
      nameError = "Error name";

      this.setState({ nameError });
      console.log("validName" + nameError);
      console.log(this.state);
    }

    if (idErrorz != "" || idErrorz2 != "" || nameError != "") {
      console.log("validEls" + idErrorz2 + idErrorz);
      return false;
    }

    return true;
    // if (idError) {
    //   this.setState({ idError });

    //   return false;
    // }
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const isValid = this.validate();
    console.log("onSub" + isValid);
    if (isValid) {
      console.log(this.state);
      const newItem = {
        cID: this.state.cID,
        cName: this.state.cName,
        cStatus: this.state.cStatus
      };

      this.props.addType(newItem);
      this.setState(initialState);
      this.toggle();
    }
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
          เพิ่ม
        </Button>

        <Modal isOpen={this.state.modal}>
          <ModalHeader>เพิ่มข้อมูลประเภทครุภัณฑ์</ModalHeader>
          <Form>
            <ModalBody>
              <Label for="exampleName">รหัสประเภทครุภัณฑ์</Label>

              <Row form>
                <Col md={3}>
                  {this.state.idErrorz ? (
                    <FormGroup>
                      <Input
                        type="number"
                        name="cID1"
                        id="cID1"
                        placeholder="1234"
                        onChange={this.onChange}
                        invalid
                      />
                      <FormFeedback style={{ fontSize: 10 }}>
                        โปรดกรอกให้ครบ 4 ตัว
                      </FormFeedback>
                    </FormGroup>
                  ) : (
                    <FormGroup>
                      <Input
                        type="number"
                        name="cID1"
                        id="cID1"
                        placeholder="1234"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  )}
                </Col>
                <Label for="exampleName">-</Label>
                <Col md={3}>
                  {this.state.idErrorz2 ? (
                    <FormGroup>
                      <Input
                        type="number"
                        name="cID2"
                        id="cID2"
                        placeholder="1234"
                        onChange={this.onChange}
                        invalid
                      />
                      <FormFeedback style={{ fontSize: 10 }}>
                        โปรดกรอกให้ครบ 3 ตัว
                      </FormFeedback>
                    </FormGroup>
                  ) : (
                    <FormGroup>
                      <Input
                        type="number"
                        name="cID2"
                        id="cID2"
                        placeholder="1234"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  )}
                </Col>
              </Row>
              {this.state.nameError ? (
                <FormGroup>
                  <Label for="cName">ชื่อประเภทครุภัณฑ์</Label>
                  <Input
                    type="name"
                    name="cName"
                    id="cName"
                    placeholder="Type name"
                    onChange={this.onChange}
                    invalid
                  />
                  <FormFeedback style={{ fontSize: 10 }}>
                    โปรดกรอกชื่อประเภท
                  </FormFeedback>
                </FormGroup>
              ) : (
                <FormGroup>
                  <Label for="cName">ชื่อประเภทครุภัณฑ์</Label>
                  <Input
                    type="name"
                    name="cName"
                    id="cName"
                    placeholder="Type name"
                    onChange={this.onChange}
                  />
                </FormGroup>
              )}
              <FormGroup>
                <Label for="cStatus">สถานะการใช้งาน</Label>
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
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={e => this.onSubmit(e)}>
                เพิ่ม
              </Button>
              <Button color="danger" onClick={this.toggle}>
                ยกเลิก
              </Button>
            </ModalFooter>
          </Form>
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
