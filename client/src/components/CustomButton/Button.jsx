import React from "react";
import { ButtonContainer, Wrapper } from "./ButtonStyle";
import { Text, themeColor } from "../../GlobalStyle";
const Button = ({ buttonWidth, text, fontSize, style, bgColor, ...props }) => {
  return (
    <ButtonContainer
      buttonWidth={buttonWidth}
      style={style}
      // bgColor={bgColor}
      //   onClick={() => console.log(window.screen)}
    >
      <Wrapper>
        {props.children}
        <Text
          color={"#fff"}
          fontSize={fontSize || "16px"}
          fontWeight={400}
          style={{ margin: 0 }}
          letterSpacing={".025rem"}
        >
          {text}
        </Text>
      </Wrapper>
    </ButtonContainer>
  );
};

export default Button;
