import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const ModalBackground = styled.div`
  position: absolute;
  display: ${(props) => props.isOpen};
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;
export const ModalContainer = styled.div`
  position: relative;

  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;
export const CloseIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  right: 10px;
  top: 10px;
  color: ${themeColor.gray_2};
  font-size: 24px;
  font-weight: 400;
  & :hover {
    cursor: pointer;
  }
`;
