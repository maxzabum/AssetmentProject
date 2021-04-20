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
  background-color: #fff;
  padding: 15px 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
export const Table = styled.table`
  width: 100%;
`;
export const TableRow = styled.tr`
  border-bottom: 1px solid #f4f4f4;
`;
export const TableHeader = styled.th`
  color: #474554;
  font-weight: 400;
  padding-bottom: 15px;
`;
export const TableData = styled.td`
  font-size: 14px;
  color: #363636;
  font-weight: 600;
  padding: 15px 0;
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
  //   & * {
  //     padding: 10px 15px;
  //   }
`;

export const NumberPage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin: 5px;
  font-weight: 500;
  border-radius: 5px;
  transition: all 0.25s;
  &:hover {
    transition: all 0.25s;
    background-color: ${themeColor.blue_1};
    cursor: pointer;
    color: #fff;
  }
`;
