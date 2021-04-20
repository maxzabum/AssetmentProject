import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const ButtonContainer = styled.div`
  width: ${(props) => props.buttonWidth || "100px"};
  height: 100%;
  background-color: ${themeColor.blue_2};

  border-radius: 5px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.25s;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.05);
    transition: all 0.25s;
  }
`;
