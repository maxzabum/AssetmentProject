import React, { useState } from "react";
import { Text } from "../../GlobalStyle";
import { themeColor } from "../../GlobalStyle";
import Button from "../../components/CustomButton/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  AssetScreenContainer,
  ManageContainer,
  LeftContainer,
  FilterContainer,
  TableContainer,
  TableRow,
  TableHeader,
  TableData,
  Table,
  NumberPageContainer,
  NumberPage,
} from "./AssetScreenStyle";
const AssetScreen = () => {
  const [numPage, setNumPage] = useState("0");
  const pagination = () => {
    return (
      <NumberPageContainer>
        <NumberPage>
          <BsChevronLeft style={{ width: 20, height: 20 }} />
        </NumberPage>
        <NumberPage>1</NumberPage>
        <NumberPage>...</NumberPage>
        <NumberPage>2</NumberPage>
        <NumberPage>3</NumberPage>
        <NumberPage>...</NumberPage>
        <NumberPage>4</NumberPage>
        <NumberPage>
          <BsChevronRight style={{ width: 20, height: 20 }} />
        </NumberPage>
      </NumberPageContainer>
    );
  };
  return (
    <AssetScreenContainer>
      <ManageContainer>
        <LeftContainer>
          <Text
            color={"#091540"}
            fontSize={"24px"}
            fontWeight={400}
            paddingLeft={"30px"}
          >
            ข้อมูลครุภัณฑ์
          </Text>
          <Button buttonWidth={"80px"} text={"เพิ่ม"} />
          <Button buttonWidth={"80px"} text={"ส่งออก"} />
        </LeftContainer>
        <FilterContainer></FilterContainer>
      </ManageContainer>
      <TableContainer>
        <Table>
          <TableRow>
            <TableHeader>ชื่อครุภัณฑ์</TableHeader>
            <TableHeader>หมายเลขครุภัณฑ์</TableHeader>
            <TableHeader>วัน/เดือน/ปี ที่ซื้อ</TableHeader>
            <TableHeader>{"ราคาครุภัณฑ์(หน่วย)"}</TableHeader>
            <TableHeader>ประเภทครุภัณฑ์</TableHeader>
            <TableHeader>วิธีที่ได้รับครุภัณฑ์</TableHeader>
            <TableHeader>สภาพครุภัณฑ์</TableHeader>
            <TableHeader>การจัดการ</TableHeader>
            <TableHeader></TableHeader>
            {/* <TableHeader>Firstname</TableHeader> */}
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          <TableRow>
            <TableData>JillJillJill</TableData>
            <TableData>JiJillJillJillll</TableData>
            <TableData>Jill</TableData>
            <TableData>JilJillJilll</TableData>
            <TableData>JillJillJillJillJillJill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
            <TableData>Jill</TableData>
          </TableRow>
          {window.screen.height > 1000 && (
            <>
              <TableRow>
                <TableData>JillJillJill</TableData>
                <TableData>JiJillJillJillll</TableData>
                <TableData>Jill</TableData>
                <TableData>JilJillJilll</TableData>
                <TableData>JillJillJillJillJillJill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
              </TableRow>
              <TableRow>
                <TableData>JillJillJill</TableData>
                <TableData>JiJillJillJillll</TableData>
                <TableData>Jill</TableData>
                <TableData>JilJillJilll</TableData>
                <TableData>JillJillJillJillJillJill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
              </TableRow>
              <TableRow>
                <TableData>JillJillJill</TableData>
                <TableData>JiJillJillJillll</TableData>
                <TableData>Jill</TableData>
                <TableData>JilJillJilll</TableData>
                <TableData>JillJillJillJillJillJill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
                <TableData>Jill</TableData>
              </TableRow>
            </>
          )}
        </Table>
      </TableContainer>
      {pagination()}
    </AssetScreenContainer>
  );
};

export default AssetScreen;
