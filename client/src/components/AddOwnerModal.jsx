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
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { addOwner } from "../actions/ownerActions";
import { getOwners } from "../actions/ownerActions";
import PropTypes from "prop-types";

class AddOwnerModal extends Component {
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
    auth: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    getOwners: PropTypes.func.isRequired
  };
  handleValidSubmit = (e, values) => {
    this.setState({
      pName: values.pName,
      pStatus: values.pStatus
    });
    console.log("THE VAL", this.state);
    this.onSubmit(e);
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
      pName: this.state.pName,
      pStatus: this.state.pStatus
    };
    this.props.addOwner(newItem);

    this.toggle();
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
          <ModalHeader toggle={this.toggle}>
            เพิ่มข้อมูลผู้รับผิดชอบ
          </ModalHeader>
          <ModalBody>
            <AvForm onValidSubmit={this.handleValidSubmit}>
              <AvField
                name="pName"
                label="ชื่อ - สกุล"
                type="text"
                errorMessage="กรุณากรอกอย่างน้อย 1 ตัว"
                validate={{
                  required: { value: true }

                  // minLength: { value: 6 },
                  // maxLength: { value: 16 }
                }}
              />

              <AvField
                type="select"
                name="pStatus"
                label="สถานะการใช้งาน"
                value="0"
              >
                <option value="0">ใช้งานได้</option>
                <option value="1">ไม่สามารถใช้งานได้</option>
              </AvField>
              <Button color="primary">ยืนยัน</Button>
            </AvForm>
            {/* <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="pName">ชื่อผู้รับผิดชอบครุภัณฑ์</Label>
                <Input
                  type="text"
                  name="pName"
                  id="pName"
                  placeholder=""
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pStatus">สถานะ</Label>
                <Input
                  type="select"
                  name="pStatus"
                  id="pStatus"
                  onChange={this.onDropdownSelected}
                >
                  <option value="false">ไม่มีสิทธิ์ใช้งาน</option>
                  <option value="true">มีสิทธิ์ใช้งาน</option>
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
export default connect(mapStateToProps, { addOwner, getOwners })(AddOwnerModal);
