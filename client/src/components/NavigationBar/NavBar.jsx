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
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
const NavBar = (props) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <NavbarContainer>
      <NavListContainer>
        <NormalListContainer>
          <ListContainer onClick={() => history.push(`${url}/assetment`)}>
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
          <ListContainer onClick={() => history.push(`${url}/assetfixs`)}>
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
          <ListContainer onClick={() => history.push(`${url}/typeassetment`)}>
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
          <ListContainer onClick={() => history.push(`${url}/assetrooms`)}>
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
        {props.auth.user.mStatus == "แอดมิน" && (
          <AdminListContainer>
            <ListContainer onClick={() => history.push(`${url}/assetowners`)}>
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
            <ListContainer onClick={() => history.push(`${url}/assetusers`)}>
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
        )}
      </NavListContainer>
    </NavbarContainer>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(NavBar);
