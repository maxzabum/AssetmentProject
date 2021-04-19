import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
import SeaBg from "./sea-bg.jpg";
export const LoginScreenContainer = styled.div`
  min-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${SeaBg});
`;
export const LoginContainer = styled.div`
  width: 70%;
  height: 70%;
  background-color: #fff;
  display: flex;
  border-radius: 25px;
  flex-direction: column;
`;
export const TopContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  border-radius: 25px;
`;
export const ImageContainer = styled.img`
  width: 50%;
  margin: 20px 10px;
  padding: 0px 10px;
`;
export const LoginFormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
`;
export const ButtonSubmit = styled.button`
  font-size: 16px;
  width: 300px;
  margin-top: 20px;
  padding: 11px 0;
  border-radius: 25px;
  font-weight: 300;
  border: none;
  color: #fff;
  background-color: ${themeColor.gray};
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.025, 1.025);
    transition-duration: 0.5s;
  }
`;
export const AlertText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
