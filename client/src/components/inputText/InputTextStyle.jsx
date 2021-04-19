import styled from "styled-components";
import { themeColor } from "../../GlobalStyle";
export const InputContainer = styled.div`
  width: 300px;
`;
export const TextDescription = styled.p``;
export const InputArea = styled.div`
  border: 1px solid
    ${(props) => {
      if (props.isValid) return themeColor.gray;
      if (!props.isValid) return "#f55442";
    }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 25px;
  &:focus-within {
    // background-color: #000;
    box-shadow: 0 0 0 1px ${themeColor.gray};
    transition: all 0.3s;
  }
`;
export const Input = styled.input`
  font-size: 14px;
  font-weight: 300;
  flex: 1 1 100px;
  border: none;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;
