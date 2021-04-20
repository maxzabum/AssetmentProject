import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themeColor.blue_2};
  height: 90vh;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  margin: 40px 0;
`;
export const NavListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;
export const NormalListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const AdminListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  transition: all 0.25s;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.25s;
    box-shadow: inset 5px 0 0 0 #fff;
  }
`;
export const DivLine = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin: 0 20px;
`;
