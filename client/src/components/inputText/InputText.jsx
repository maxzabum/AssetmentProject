import React, { useState, useEffect } from "react";
import {
  InputContainer,
  TextDescription,
  InputArea,
  ToggleShowPassword,
  Input,
} from "./InputTextStyle";
import { Text } from "../../GlobalStyle";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const InputText = ({
  style,
  textDesc,
  showBlind,
  placeholder,
  type,
  onChange,
  isValid,
  ...props
}) => {
  const [isBlind, setIsBlind] = useState(false);
  const bindToggle = () => {
    setIsBlind(!isBlind);
  };
  return (
    <InputContainer style={style}>
      <Text
        fontSize={"16px"}
        fontWeight={"300"}
        color={"gray"}
        paddingLeft={"40px"}
        paddingBottom={"5px"}
        isValid={isValid}
      >
        {textDesc}
      </Text>
      <InputArea isValid={isValid}>
        <Input onChange={onChange} placeholder={placeholder} type={type} />
        {showBlind && (
          <div>
            {isBlind ? (
              <AiOutlineEye onClick={() => setIsBlind(false)} />
            ) : (
              <AiOutlineEyeInvisible onClick={() => setIsBlind(true)} />
            )}
          </div>
        )}
      </InputArea>
    </InputContainer>
  );
};

export default InputText;
