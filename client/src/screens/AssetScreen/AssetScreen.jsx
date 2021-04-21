import React, { useState, useEffect } from "react";
import { Text } from "../../GlobalStyle";
import { themeColor } from "../../GlobalStyle";
import Button from "../../components/CustomButton/Button";
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../../actions/itemActions";
import { getItemTypes } from "../../actions/itemTypeActions";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { AiFillEdit, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
  TableBody,
  ButtonPage,
  ButtonManageData,
} from "./AssetScreenStyle";
const AssetScreen = (props) => {
  const [numPage, setNumPage] = useState(1);
  const tableRowWidth = "20%";
  const tableRowWidth2 = "15%";
  const tableRowWidth3 = "12.5%";
  const tableRowWidth4 = "12.5%";
  const tableRowWidth5 = "15%";
  const tableRowWidth6 = "10%";
  const tableRowWidth7 = "12.5%";

  useEffect(() => {
    props.getItems();
    props.getItemTypes();
    // setAssetItem(props.item.items);
    // return () => {
    //   cleanup
    // }
  }, []);
  const manageDataComponents = () => {
    const style = {
      width: "35px",
      height: "35px",
      color: themeColor.blue_2,
      padding: "5px",
      borderRadius: "10px",
    };
    return (
      <>
        <ButtonManageData>
          <BiDetail style={style} />
        </ButtonManageData>
        <ButtonManageData>
          <AiFillEdit style={style} />
        </ButtonManageData>
        <ButtonManageData>
          <AiOutlineDelete style={style} />
        </ButtonManageData>
      </>
    );
  };
  const mapItemToTable = (numPage) => {
    const maxData = 10;
    const itemAssets = props.item.items;
    const itemTypes = props.itemType.items;
    const completeData = [];

    // const today = new Date(itemAssets[10].aDate);
    for (let i = 0; i < itemAssets.length; i++) {
      for (let j = 0; j < itemTypes.length; j++) {
        if (itemAssets[i].cID == itemTypes[j]._id) {
          itemAssets[i].cID = itemTypes[j].cName;
        }
      }
      const formatDate = new Date(itemAssets[i].date);
      itemAssets[i].aDate = formatDate.toLocaleDateString("th-TH");
    }
    const map = itemAssets.map((item, index) => {
      if (index >= numPage * maxData - maxData && index < numPage * maxData) {
        return (
          <TableRow key={item._id}>
            <TableData width={tableRowWidth}>{item.aName}</TableData>
            <TableData width={tableRowWidth2}>{item.aSerial}</TableData>
            <TableData width={tableRowWidth3}>{item.aDate}</TableData>
            <TableData width={tableRowWidth4}>{item.aPrice}</TableData>
            <TableData width={tableRowWidth5}>{item.cID}</TableData>
            <TableData width={tableRowWidth6}>{item.aStatus}</TableData>
            <TableData
              width={tableRowWidth7}
              style={{ justifyContent: "space-evenly", alignContent: "center" }}
            >
              {manageDataComponents()}
            </TableData>
          </TableRow>
        );
      }
    });
    return map;
  };
  const pagination = () => {
    const totalPage = Math.ceil(props.item.items.length / 10);

    // const totalPage = 10;
    let mapPage = [];
    for (let i = 0; i < totalPage; i++) {
      if (totalPage > 10) {
        if (i == 0) {
          mapPage.push(
            <>
              <NumberPage
                index={i + 1}
                isCurrent={numPage}
                onClick={() => {
                  setNumPage(i + 1);
                }}
              >
                {i + 1}
              </NumberPage>
              <NumberPage>...</NumberPage>
            </>
          );
        }
        if (i > 0 && i < 10) {
          mapPage.push(
            <>
              <NumberPage
                index={i + 1}
                isCurrent={numPage}
                onClick={() => {
                  setNumPage(i + 1);
                }}
              >
                {i + 1}
              </NumberPage>
            </>
          );
        }
        if (i == totalPage - 1) {
          mapPage.push(
            <>
              <NumberPage>...</NumberPage>
              <NumberPage
                index={i + 1}
                isCurrent={numPage}
                onClick={() => {
                  setNumPage(i + 1);
                }}
              >
                {i + 1}
              </NumberPage>
            </>
          );
        }
      } else {
        mapPage.push(
          <>
            <NumberPage
              index={i + 1}
              isCurrent={numPage}
              // theme={{ main: "#000" }}
              onClick={() => {
                setNumPage(i + 1);
              }}
            >
              {i + 1}
            </NumberPage>
          </>
        );
      }
    }
    return (
      <NumberPageContainer>
        <ButtonPage
          onClick={() => setNumPage((number) => number - 1)}
          disabled={numPage == 1 ? true : false}
        >
          <BsChevronLeft style={{ width: 30, height: 30 }} />
        </ButtonPage>
        {mapPage}
        <ButtonPage
          onClick={() => setNumPage((number) => number + 1)}
          disabled={totalPage == numPage ? true : false}
        >
          <BsChevronRight style={{ width: 30, height: 30 }} />
        </ButtonPage>
      </NumberPageContainer>
    );
  };
  return (
    <AssetScreenContainer>
      <ManageContainer>
        <LeftContainer>
          <Text
            onClick={() => console.log("item", props.item)}
            color={"#091540"}
            fontSize={"24px"}
            fontWeight={400}
            paddingLeft={"30px"}
          >
            ข้อมูลครุภัณฑ์
          </Text>
          <Button
            buttonWidth={"80px"}
            text={"เพิ่ม"}
            bgColor={themeColor.blue_1}
            // style={{ backgroundColor: themeColor.blue_1 }}
          />
          <Button buttonWidth={"80px"} text={"ส่งออก"} />
        </LeftContainer>
        <FilterContainer></FilterContainer>
      </ManageContainer>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableHeader width={tableRowWidth}>ชื่อครุภัณฑ์</TableHeader>
              <TableHeader width={tableRowWidth2}>หมายเลขครุภัณฑ์</TableHeader>
              <TableHeader width={tableRowWidth3}>
                วัน/เดือน/ปี ที่ซื้อ
              </TableHeader>
              <TableHeader width={tableRowWidth4}>
                {"ราคาครุภัณฑ์(หน่วย)"}
              </TableHeader>
              <TableHeader width={tableRowWidth5}>ประเภทครุภัณฑ์</TableHeader>

              <TableHeader width={tableRowWidth6}>สภาพครุภัณฑ์</TableHeader>
              <TableHeader
                width={tableRowWidth7}
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                การจัดการ
              </TableHeader>
            </TableRow>
            {mapItemToTable(numPage)}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination()}
    </AssetScreenContainer>
  );
};
const mapStateToProps = (state) => ({
  item: state.item,
  itemType: state.itemType,
  auth: state.auth,
  state,
});
export default connect(mapStateToProps, {
  getItems,
  deleteItem,
  updateItem,
  getItemTypes,
})(AssetScreen);
