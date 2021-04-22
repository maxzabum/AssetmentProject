import React from "react";
import { ButtonManageData } from "./ManageDataStyle";
import { themeColor } from "../../GlobalStyle";
import { BiDetail } from "react-icons/bi";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
const ManageDataComponent = (props) => {
  const style = {
    width: "35px",
    height: "35px",
    color: themeColor.blue_2,
    padding: "5px",
    borderRadius: "10px",
  };
  return (
    <>
      <ButtonManageData onClick={() => console.log(props.data)}>
        <BiDetail style={style} />
      </ButtonManageData>
      <ButtonManageData>
        <AiFillEdit style={style} />
      </ButtonManageData>
      <ButtonManageData>
        <AiOutlineDelete style={style} />
      </ButtonManageData>
    </>
  );
};

export default ManageDataComponent;
