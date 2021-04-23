import React, { useState, useEffect } from "react";
import { ButtonManageData } from "./ManageDataStyle";
import { themeColor } from "../../GlobalStyle";
import { BiDetail } from "react-icons/bi";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import ModalScreen from "../ModalScreen/ModalScreen";
import FormDetailComponent from "../FormDetailComponent/FormDetailComponent.jsx";
const ManageDataComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    width: "35px",
    height: "35px",
    color: themeColor.blue_2,
    padding: "5px",
    borderRadius: "10px",
  };
  return (
    <>
      <ButtonManageData
        onClick={() => {
          setIsOpen(true);
          //   console.log(props.data);
          props.setData(props.data);
        }}
      >
        <BiDetail style={style} />
      </ButtonManageData>
      <ButtonManageData>
        <AiFillEdit style={style} />
      </ButtonManageData>
      <ButtonManageData>
        <AiOutlineDelete style={style} />
      </ButtonManageData>
      <ModalScreen isOpen={isOpen} setIsOpen={setIsOpen}>
        <FormDetailComponent />
      </ModalScreen>
    </>
  );
};

export default ManageDataComponent;
