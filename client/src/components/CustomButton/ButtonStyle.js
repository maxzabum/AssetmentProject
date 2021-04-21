import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const ButtonContainer = styled.div`
  width: ${(props) => props.buttonWidth || ""};
  height: 100%;
  background-color: ${themeColor.blue_2};

  border-radius: 5px;
`;
export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${themeColor.blue_2};
  transition: all 0.05s;
  outline: none;
  border: none;
  &:active {
    transform: scale(0.98);
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);

    transition: all 0.05s;
  }
  &:focus {
    // transform: scale(1);
    outline: none;
    border: none;
  }
  // &:hover {
  //   cursor: pointer;
  //   background-color: rgba(255, 255, 255, 0.05);
  //   transition: all 0.25s;
  // }
`;
