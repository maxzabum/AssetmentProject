import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const AssetScreenContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;
export const ManageContainer = styled.div`
  margin-bottom: 20px;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  & p {
    margin: 0 15px;
  }
  & :nth-child(2),
  & :nth-child(3) {
    margin: 0 15px;
  }
`;
export const FilterContainer = styled.div``;
export const TableContainer = styled.div`
  overflow: auto;
  background-color: #fff;
  padding: 15px 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 70vh;
`;
export const Table = styled.table`
  width: 100%;
  display: flex;
`;
export const TableBody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const TableRow = styled.tr`
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  justify-content: space-between;
`;
export const TableHeader = styled.th`
  display: flex;
  align-items: center;
  color: #474554;
  font-weight: 400;
  padding-bottom: 15px;
  width: ${(props) => props.width || "auto"};
`;
export const TableData = styled.td`
  display: flex;
  align-items: center;
  width: ${(props) => props.width || "auto"};
  font-size: clamp(12px, 0.95vw, 14px);
  color: #363636;
  font-weight: 600;
  padding: 12px 0;
  align: center;
`;
export const NumberPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 10px 0px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
export const TableFooter = styled.tfoot``;

export const NumberPage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 5px;
  font-weight: 500;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.isCurrent) {
      if (props.index === props.isCurrent) {
        return themeColor.blue_1;
      }
    } else {
      return "";
    }
  }};
  color: ${(props) => {
    if (props.isCurrent) {
      if (props.index === props.isCurrent) {
        return "#fff";
      }
    } else {
      return "";
    }
  }};
  transition: all 0.25s;
  &:hover {
    transition: all 0.25s;
    background-color: ${themeColor.blue_1};
    cursor: pointer;
    color: #fff;
  }
`;

export const ButtonPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  font-weight: 500;
  border-radius: 5px;
  transition: all 0.25s;
  background-color: #f4f4f4;
  outline: none;
  border: none;
  &:hover {
    transition: all 0.25s;
    background-color: ${themeColor.blue_1};
    cursor: pointer;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
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
