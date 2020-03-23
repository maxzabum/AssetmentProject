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
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Row,
  Col
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import { getOwners } from "../actions/ownerActions";
import PropTypes from "prop-types";
const initialState = {
  modal: false,
  aSerial: "",
  aSerial1: "",
  aSerial2: "",
  aSerial3: "",
  aName: "",
  aStatus: "",
  aDate: "",
  aPrice: "",
  aReason: "",
  aGet: "",
  pID: "",
  cID: "",
  rID: "",
  aNameErr: "",
  aSerialErr: "",
  aReasonErr: "",
  aDateErr: "",
  aPriceErr: "",
  //isValid: true,
  postsType: [],
  postRoom: [],
  postOwner: [],
  itemType: []
};
class AddAssetModal extends Component {
  controller = new AbortController();
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
    this.setState({ aNameErr: "", aDateErr: "", aPriceErr: "" });
    let aNameErr = "";
    let aDateErr = "";
    let aPriceErr = "";

    if (this.state.aName.length == 0) {
      aNameErr = "Error name";

      this.setState({ aNameErr });
    }
    if (this.state.aDate.length == 0) {
      aDateErr = "Error Date";

      this.setState({ aDateErr });
      console.log("DatName" + aDateErr);
      console.log(this.state);
    }
    if (this.state.aPrice.length == 0) {
      aPriceErr = "Error name";

      this.setState({ aPriceErr });
    }

    if (aNameErr != "" || aDateErr != "" || aPriceErr != "") {
      return false;
    }
    return true;
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    // console.log("dddddddwqe", this.state.itemType.items);
  };

  componentDidMount() {
    //const dataOwner = this.state.postOwner;
    // const listTypes = dataType.map(data => (
    //   <option value={data._id}>{data.cID}</option>
    // ));
    // const listRooms = dataRoom.map(data => (
    //   <option value={data._id}>{data.rName}</option>
    // ));
    this.props.getOwners();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // const isValid =

    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      const newItem = {
        aSerial: this.state.aSerial,
        aName: this.state.aName,
        aStatus: this.state.aStatus,
        aDate: this.state.aDate,
        aPrice: this.state.aPrice,
        aReason: this.state.aReason,
        aGet: this.state.aGet,
        pID: this.state.pID,
        cID: this.state.cID,
        rID: this.state.rID
      };
      this.props.addItem(newItem);
      this.setState(initialState);
      this.toggle();
    }
  };

  onDropdownSelected = e => {
    console.log("THE VAL", e.target.value);

    this.setState({ [e.target.name]: e.target.value });

    //here you will see the current selected value of the select input
  };
  onDropdownSelectedType = e => {
    console.log("THE VAL", e.target.value);

    const dataItem = this.props.item.items;
    const dataType = this.props.itemType.items;
    const findLastItem = dataItem.reduce((acc, item) => {
      if (item.cID == e.target.value) {
        acc += 1;
      }
      return acc;
    }, 0);
    const findType = dataType.find(data => {
      return data._id == e.target.value;
    });
    console.log(findLastItem + "findd" + findType.cID);
    this.setState(
      {
        aSerial: findType.cID + "-" + findLastItem,
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state.aSerial, "aSerial");
      }
    );
    //here you will see the current selected value of the select input
  };
  render() {
    const dataType = this.props.itemType.items;
    const dataRoom = this.props.room.items;
    const dataOwner = this.props.owners.items;
    const listTypes = dataType.map(data => {
      if (data.cStatus) {
        return <option value={data._id}>{data.cName}</option>;
      }
      return null;
    });

    const listOwners = dataOwner.map(data => {
      if (data.pStatus) {
        return <option value={data._id}>{data.pName}</option>;
      }
      return null;
    });
    const listRooms = dataRoom.map(data => {
      if (data.rStatus) {
        return <option value={data._id}>{data.rName}</option>;
      }
      return null;
    });

    return (
      <div className="asd">
        <Button className="btn-add-asset" color="success" onClick={this.toggle}>
          เพิ่ม
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <Form>
            <ModalHeader>เพิ่มข้อมูลครุภัณฑ์</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="selectOwner">ชื่อผู้รับผิดชอบ</Label>
                <Input
                  type="select"
                  name="pID"
                  id="pID"
                  onChange={this.onDropdownSelected}
                >
                  {listOwners}
                </Input>
              </FormGroup>
              {this.state.aNameErr ? (
                <FormGroup>
                  <Label for="exampleName">ชื่อครุภัณฑ์</Label>
                  <Input
                    type="name"
                    name="aName"
                    id="aName"
                    placeholder="assetment name"
                    onChange={this.onChange}
                    invalid
                  />
                </FormGroup>
              ) : (
                <FormGroup>
                  <Label for="exampleName">ชื่อครุภัณฑ์</Label>
                  <Input
                    type="name"
                    name="aName"
                    id="aName"
                    placeholder="assetment name"
                    onChange={this.onChange}
                  />
                </FormGroup>
              )}

              <FormGroup>
                <Label for="cID">ประเภทครุภัณฑ์</Label>
                <Input
                  type="select"
                  name="cID"
                  id="cID"
                  onChange={this.onDropdownSelectedType}
                >
                  {listTypes}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="rID">ห้องที่ใช้</Label>
                <Input
                  type="select"
                  name="rID"
                  id="rID"
                  onChange={this.onDropdownSelected}
                >
                  {listRooms}
                </Input>
              </FormGroup>
              {this.state.aDateErr ? (
                <FormGroup>
                  <Label for="exampleDate">วัน/เดือน/ปี ที่ซื้อ</Label>
                  <Input
                    type="date"
                    name="aDate"
                    id="aDate"
                    placeholder="date placeholder"
                    onChange={this.onChange}
                    invalid
                  />
                </FormGroup>
              ) : (
                <FormGroup>
                  <Label for="exampleDate">วัน/เดือน/ปี ที่ซื้อ</Label>
                  <Input
                    type="date"
                    name="aDate"
                    id="aDate"
                    placeholder="date placeholder"
                    onChange={this.onChange}
                  />
                </FormGroup>
              )}
              {this.state.aPriceErr ? (
                <FormGroup>
                  <Label for="exampleText">ราคาครุภัณฑ์/หน่วย</Label>
                  <InputGroup>
                    <Input
                      type="price"
                      name="aPrice"
                      id="aPrice"
                      placeholder="0000000000"
                      onChange={this.onChange}
                      invalid
                    />
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Baht/Pc</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              ) : (
                <FormGroup>
                  <Label for="exampleText">ราคาครุภัณฑ์/หน่วย</Label>
                  <InputGroup>
                    <Input
                      type="number"
                      name="aPrice"
                      id="aPrice"
                      placeholder="0000000000"
                      onChange={this.onChange}
                    />
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Baht/Pc</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              )}

              <FormGroup>
                <Label for="selectGet">วีธีที่ได้รับครุภัณฑ์</Label>
                <Input
                  type="select"
                  name="aGet"
                  id="aGet"
                  onChange={this.onDropdownSelected}
                >
                  <option value="0">ซื้อ</option>
                  <option value="1">บริจาค</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="aStatus">สภาพครุภัณฑ์</Label>
                <Input
                  type="select"
                  name="aStatus"
                  id="aStatus"
                  onChange={this.onDropdownSelected}
                >
                  <option value="0">ปกติ</option>
                  <option value="2">ชำรุด</option>
                  <option value="3">เสื่อมสภาพ</option>
                  <option value="4">ส่งซ่อม</option>
                  <option value="5">แทงจำหน่าย</option>
                </Input>
              </FormGroup>
              {this.state.aStatus == "5" ? (
                <FormGroup>
                  <Label for="exampleText">สาเหตุที่แทงจำหน่าย</Label>
                  <Input
                    type="textarea"
                    name="aReason"
                    id="aReason"
                    onChange={this.onChange}
                  />
                </FormGroup>
              ) : null}
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
export default connect(mapStateToProps, { addItem, getOwners })(AddAssetModal);
/*
const AddAssetModal = props => {
  const { buttonLabel, className } = props;
  const [setModal] = useState(false);
  const toggle = () => setModal(!this.modal);

  return (
    <div>
      <Button className="btn-add-asset" color="success" onClick={toggle}>
        Add
      </Button>

      <Form>
        <Modal isOpen={this.modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Assetment</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleName">Serial no.</Label>
              <Input
                type="text"
                name="aSerial"
                id="exampleSeri"
                placeholder="Ex:120-411-420"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="name"
                name="aName"
                id="exampleName"
                placeholder="assetment name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="selectType">Select</Label>
              <Input type="select" name="aSelect" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="roomUse">Room</Label>
              <Input
                type="room"
                name="aRoom"
                id="examplePassword"
                placeholder="Ex:IT-412"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTime">Time</Label>
              <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Price</Label>
              <InputGroup>
                <Input
                  type="price"
                  name="aPrice"
                  id="examplePrice"
                  placeholder="0000000000"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Baht/Pc</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="selectType">Get by</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="selectType">Item condition</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Reason</Label>
              <Input type="textarea" name="aReason" id="exampleText" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Add
            </Button>{" "}
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
};


*/
