import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { connect } from "react-redux";
import { addRoom } from "../actions/roomActions";
const initialState = {
  modal: false,
  //rID:"",
  rName: "",
  rStatus: "",
  rtypeID: "",
  postsAssets: []
};
class AddRoomModal extends Component {
  state = initialState;

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleValidSubmit = (e, values) => {
    this.setState({
      rName: values.rName,
      rStatus: values.rStatus,
      rtypeID: values.rtypeID
    });
    console.log("THE VAL", this.state);
    this.onSubmit(e);
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
    console.log("THE VAL", e.target.value);
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

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>เพิ่มข้อมูลห้อง</ModalHeader>
          <ModalBody>
            <AvForm onValidSubmit={this.handleValidSubmit}>
              <AvField
                name="rName"
                label="ชื่อห้อง"
                type="text"
                errorMessage="กรุณากรอกอย่างน้อย 1 ตัว"
                helpMessage="EX : ITXXX , IT555"
                validate={{
                  required: { value: true },
                  pattern: { value: "^[A-Za-z0-9]+$" }
                  // minLength: { value: 6 },
                  // maxLength: { value: 16 }
                }}
              />
              <AvField
                name="rtypeID"
                label="ประเภทห้อง"
                type="text"
                errorMessage="กรุณากรอกอย่างน้อย 1 ตัว"
                validate={{
                  required: { value: true }
                  // pattern: { value: "^[A-Za-z0-9]+$" },
                  // minLength: { value: 6 },
                  // maxLength: { value: 16 }
                }}
              />
              <AvField
                type="select"
                name="rStatus"
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
                <Label for="rName">ชื่อห้อง</Label>
                <Input
                  type="name"
                  name="rName"
                  id="rName"
                  placeholder="Ex:120-411-420"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rtypeID">ประเภทห้อง</Label>
                <Input
                  type="name"
                  name="rtypeID"
                  id="rtypeID"
                  placeholder="assetment name"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rStatus">สถานะการใช้งาน</Label>
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
              <Button color="primary">เพิ่ม</Button>
            </Form> */}
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
