import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
import PropTypes from "prop-types";
export const UserBarContainer = styled.div`
  position: relative;
  display: flex;
  //   flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0px 40px;
  background-color: ${themeColor.blue_1};
`;
export const LogoContainer = styled.div``;
export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageUser = styled.div`
  width: 50px;
  height: 50px;
`;
export const Image = styled.img``;
export const UserDetailContainer = styled.div`
  padding: 0 20px;
  & p {
    color: #fff;
    font-size: 16px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const DropdownSetting = styled.div`
  padding: 12px;
  background-color: ${(props) => props.isClicked && "rgba(255, 255, 255, 0.1)"};
  border-radius: 10px;

  transition: all 0.25s;
  &:hover {
    transition: all 0.25s;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
export const DropdownContainer = styled.div`
  position: absolute;
  background-color: #fff;
  width: 250px;
  right: 40px;
  bottom: -95px;
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  z-index: 999;
  & p {
    font-size: 16px;
    font-weight: 300;
    padding: 5px 0px 5px 5px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  & div {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: rgba(228, 228, 228, 0.5);
    cursor: pointer;
    border-radius: 10px;
  }
`;
