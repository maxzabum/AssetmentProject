import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const FormDetailContainer = styled.div`
  //   padding: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const DetailContainer = styled.div`
  display: flex;
  & > * {
    padding: 0 10px;
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  padding-bottom: 10px;
  align-items: center;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${themeColor.blue_2};
`;
export const TextContainer = styled.div`
  min-width: 300px;
  & div:nth-child(1) {
    margin-top: 0px;
  }
`;
export const Image = styled.img`
  min-width: 300px;
  object-fit: cover;
`;
export const TextField = styled.div`
  display: flex;
  margin: 5px 0;
`;
