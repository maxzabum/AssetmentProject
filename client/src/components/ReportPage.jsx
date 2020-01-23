import React, { Component, useState } from "react";
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
import classnames from "classnames";
import "../ReportPageStyle.css";

class ReportPage extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div>
        <Button className="btn-reportAss" color="danger" onClick={this.toggle}>
          Print
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.className}
        >
          <ModalHeader toggle={this.toggle}>Assetment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="selectOwner">Owner Name</Label>
                <Input
                  type="select"
                  name="pID"
                  id="pID"
                  onChange={this.onDropdownSelected}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleName">Serial no.</Label>
                <Input
                  type="text"
                  name="aSerial"
                  id="aSerial"
                  placeholder="Ex:120-411-420"
                  onChange={this.onChange}
                />
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
                <Label for="selectType">Types No.</Label>
                <Input
                  type="select"
                  name="cID"
                  id="cID"
                  onChange={this.onDropdownSelected}
                ></Input>
              </FormGroup>

              <Button color="primary">Add</Button>
            </Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ReportPage;
