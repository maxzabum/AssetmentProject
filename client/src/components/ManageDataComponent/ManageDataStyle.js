import styled from "styled-components";
export const ButtonManageData = styled.button`
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transition: all 0.25s;
    background-color: #e6e6e6;
  }
  &:active {
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
