import React from "react";
import { Text, themeColor } from "../../GlobalStyle";
import { IoClose } from "react-icons/io5";

import { ModalBackground, ModalContainer, CloseIcon } from "./ModalScreenStyle";
const ModalScreen = ({ isOpen, setIsOpen, ...props }) => {
  return (
    <ModalBackground isOpen={isOpen == true ? "flex" : "none"}>
      <ModalContainer>
        <CloseIcon onClick={() => setIsOpen(false)}>
          <IoClose
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              color: themeColor.gray_2,
              fontSize: 26,
              fontWeight: 400,
            }}
          />
        </CloseIcon>
        {props.children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default ModalScreen;
