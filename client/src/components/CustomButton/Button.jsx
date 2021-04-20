import React from "react";
import { ButtonContainer, Wrapper } from "./ButtonStyle";
import { Text, themeColor } from "../../GlobalStyle";
const Button = ({ buttonWidth, text, ...props }) => {
  return (
    <ButtonContainer
      buttonWidth={buttonWidth}
      //   onClick={() => console.log(window.screen)}
    >
      <Wrapper>
        <Text
          color={"#fff"}
          fontSize={"16px"}
          fontWeight={400}
          letterSpacing={".025rem"}
        >
          {text}
        </Text>
      </Wrapper>
    </ButtonContainer>
  );
};

export default Button;
