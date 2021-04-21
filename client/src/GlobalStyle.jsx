import styled from "styled-components";
import PropTypes from "prop-types";
export const themeColor = {
  blue_1: "#3b7097",
  blue_2: "#4a8db7",
  blue_3: "#75bde0",
  blue_4: "#a2e2f8",
  gray: "#334153",
  gray_2: "#231F20",
};
export const ScreenContainer = styled.div`
  width: 100%;
  max-height: 100vh;
`;
export const ManageScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 220px auto;
`;
export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "12px"};
  color: ${(props) => {
    if (props.isValid) {
      if (props.color == "blue_1") return themeColor.blue_1;
      if (props.color == "blue_2") return themeColor.blue_2;
      if (props.color == "blue_3") return themeColor.blue_3;
      if (props.color == "blue_4") return themeColor.blue_4;
      if (props.color == "gray") return themeColor.gray;
      if (props.color == "gray_2") return themeColor.gray_2;
    }

    if (props.isValid == false) return "#f55442";
    return props.color || "#000";
  }};
  letter-spacing: ${(props) => props.letterSpacing};
  font-weight: ${(props) => props.fontWeight || "200"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  margin: 0;
`;
