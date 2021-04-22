import React, { useEffect, useState } from "react";
import {
  UserBarContainer,
  LogoContainer,
  UserInfoContainer,
  ImageUser,
  UserDetailContainer,
  DropdownSetting,
} from "./UserBarStyle";
import { Text } from "../../GlobalStyle";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { VscTriangleDown, VscChevronRight } from "react-icons/vsc";
import { loadUser } from "../../actions/authActions";
import SettingDropdown from "./SettingDropdown";
import store from "../../store";
const UserBar = ({ toggleDropdown, setToggleDropdown, ...props }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  //   const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isShow, setisShow] = useState(false);
  useEffect(() => {
    console.log(props.auth.isAuthenticated);
    if (props.auth.isAuthenticated) {
      setUser(props.auth.user);
    }
    if (props.auth.isAuthenticated == false) {
      history.push("/");
      setUser({});
    }
    // console.log("saeqweqw", props.auth);
  }, [props.auth]);
  //   useEffect(() => {}, [toggleDropdown]);

  return (
    <>
      <UserBarContainer>
        <LogoContainer onClick={() => console.log("dsadsad", user)}>
          <Text fontSize={"24px"} color={"#fff"} fontWeight={400}>
            ระบบจัดการครุภัณฑ์
          </Text>
          {/* <Text fontSize={"24px"} color={"#fff"} fontWeight={400}></Text> */}
        </LogoContainer>
        <UserInfoContainer>
          <ImageUser>
            <img
              src={user ? user.mPic : null}
              style={{ width: "100%", height: "100%", borderRadius: "25%" }}
            />
          </ImageUser>
          <UserDetailContainer>
            <Text fontWeight={"400"}>{user ? user.mName : ""}</Text>
            <Text>{user ? user.mStatus : ""}</Text>
          </UserDetailContainer>
          <DropdownSetting
            onClick={() => {
              setToggleDropdown(!toggleDropdown);
            }}
            isClicked={toggleDropdown}
          >
            <VscTriangleDown
              style={{
                color: "#fff",
                width: "25px",
                height: "25px",
              }}
            />
          </DropdownSetting>
        </UserInfoContainer>
        {toggleDropdown && <SettingDropdown setToggle={setToggleDropdown} />}
      </UserBarContainer>
    </>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  state,
});
export default connect(mapStateToProps, { loadUser })(UserBar);
