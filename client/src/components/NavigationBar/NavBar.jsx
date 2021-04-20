import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  LogoContainer,
  NavListContainer,
  NormalListContainer,
  AdminListContainer,
  ListContainer,
  DivLine,
} from "./NavBarStyle";
import { Text } from "../../GlobalStyle";
import { FaUserTie, FaUser, FaBox } from "react-icons/fa";
import { BsInboxesFill, BsConeStriped, BsGrid1X2Fill } from "react-icons/bs";

const NavBar = () => {
  return (
    <NavbarContainer>
      <NavListContainer>
        <NormalListContainer>
          <ListContainer>
            <FaBox
              style={{
                color: "#FFF",
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
            <Text fontSize={"16px"} color={"#fff"} fontWeight={300}>
              ข้อมูลครุภัณฑ์
            </Text>
          </ListContainer>
          <ListContainer>
            <BsConeStriped
              style={{
                color: "#fff",
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
            <Text fontSize={"16px"} color={"#fff"} fontWeight={300}>
              ข้อมูลการส่งซ่อมครุภัณฑ์
            </Text>
          </ListContainer>
          <ListContainer>
            <BsInboxesFill
              style={{
                color: "#fff",
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
            <Text fontSize={"16px"} color={"#fff"} fontWeight={300}>
              ข้อมูลประเภทครุภัณฑ์
            </Text>
          </ListContainer>
          <ListContainer>
            <BsGrid1X2Fill
              style={{
                color: "#fff",
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
            <Text fontSize={"16px"} color={"#fff"} fontWeight={300}>
              ข้อมูลห้อง
            </Text>
          </ListContainer>
        </NormalListContainer>
        <DivLine />
        <AdminListContainer>
          <ListContainer>
            <FaUser
              style={{
                color: "#fff",
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
            <Text fontSize={"16px"} color={"#fff"} fontWeight={300}>
              ผู้รับผิดชอบ
            </Text>
          </ListContainer>
          <ListContainer>
            <FaUserTie
              style={{
                color: "#fff",
                height: "20px",
                width: "20px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
            <Text fontSize={"16px"} color={"#fff"} fontWeight={300}>
              ผู้ดูแลระบบ
            </Text>
          </ListContainer>
        </AdminListContainer>
      </NavListContainer>
    </NavbarContainer>
  );
};

export default NavBar;
