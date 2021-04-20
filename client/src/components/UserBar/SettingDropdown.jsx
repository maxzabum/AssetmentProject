import React from "react";
import { Text } from "../../GlobalStyle";
import { DropdownContainer, ItemContainer } from "./UserBarStyle";
import { VscTriangleDown, VscChevronRight } from "react-icons/vsc";
import { logout } from "../../actions/authActions";
import { connect } from "react-redux";
import { IoLogOut } from "react-icons/io5";

import { AiFillSetting } from "react-icons/ai";

const SettingDropdown = ({ setToggle, ...props }) => {
  const onLogout = () => {
    props.logout();
    setToggle(false);
  };
  return (
    <DropdownContainer>
      <ItemContainer>
        <div>
          <AiFillSetting
            style={{
              padding: "5px",
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "#e4e4e4",
            }}
          />
          <Text>แก้ไขข้อมูลส่วนตัว</Text>
        </div>
        <VscChevronRight />
      </ItemContainer>
      <ItemContainer onClick={() => onLogout()}>
        <div>
          <IoLogOut
            style={{
              padding: "5px",
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "#e4e4e4",
            }}
          />
          <Text>ลงชื่อออก</Text>
        </div>
        <VscChevronRight />
      </ItemContainer>
    </DropdownContainer>
  );
};

export default connect(null, { logout })(SettingDropdown);
