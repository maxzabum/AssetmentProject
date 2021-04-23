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
import { FiSearch } from "react-icons/fi";

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
  SearchFilter,
  SearchFilterContainer,
} from "./AssetScreenStyle";
import ManageDataComponent from "../../components/ManageDataComponent/ManageDataComponent";
const AssetScreen = ({
  data,
  textHeader,
  keyData,
  tableHeader,
  sizeColumn,
  setData,
  ...props
}) => {
  const [numPage, setNumPage] = useState(1);
  const [dataSearch, setDataSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const tableRowWidth = "20%";
  const tableRowWidth2 = "15%";
  const tableRowWidth3 = "15%";
  const tableRowWidth4 = "12.5%";
  const tableRowWidth5 = "15%";
  const tableRowWidth6 = "10%";
  const tableRowWidth7 = "12.5%";
  const tableRowWidthJa = ["20%", "15%", "15%", "12.5%", "15%", "10%", "12.5%"];
  useEffect(() => {
    console.log(data);
    setDataSearch(data);
    // props.getItems();
    // props.getItemTypes();
    // setAssetItem(props.item.items);
    // return () => {
    //   cleanup
    // }
  }, [data]);
  useEffect(() => {
    searchData();
    // return () => {
    // }
  }, [searchInput]);
  const searchData = () => {
    const result = data.filter((word) => {
      for (let i = 0; i < keyData.length; i++) {
        let item = word[keyData[i]];
        if (item.toString().search(searchInput) !== -1) {
          return true;
        }
      }
    });
    setDataSearch(result);
  };
  const mapItemToTable = (numPage) => {
    const maxData = 10;
    // const itemAssets = props.item.items;
    const map = dataSearch.map((item, index) => {
      // console.log(Object.values(item));
      if (index >= numPage * maxData - maxData && index < numPage * maxData) {
        return (
          <TableRow key={item._id}>
            {keyData.map((item2, index2) => {
              for (let j = 0; j < Object.keys(item).length; j++) {
                if (keyData[index2] == Object.keys(item)[j]) {
                  // console.log(Object.values(item)[j], index2);
                  return (
                    <TableData key={index2} width={sizeColumn[index2]}>
                      {Object.values(item)[j]}
                    </TableData>
                  );
                }
              }
            })}
            {/* <TableData width={tableRowWidth}>{item.aName}</TableData>
            <TableData width={tableRowWidth2}>{item.aSerial}</TableData>
            <TableData width={tableRowWidth3}>{item.aDate}</TableData>
            <TableData width={tableRowWidth4}>{item.aPrice}</TableData>
            <TableData width={tableRowWidth5}>{item.cID}</TableData>
            <TableData width={tableRowWidth6}>{item.aStatus}</TableData>
            */}
            <TableData
              width={tableRowWidth7}
              style={{ justifyContent: "space-evenly", alignContent: "center" }}
            >
              <ManageDataComponent data={item} setData={setData} />
            </TableData>
          </TableRow>
        );
      }
    });
    return map;
  };

  const pagination = () => {
    const totalPage = Math.ceil(data.length / 10);

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
            color={"#091540"}
            fontSize={"24px"}
            fontWeight={400}
            paddingLeft={"30px"}
            onClick={() => searchData()}
          >
            {textHeader}
          </Text>
          <Button
            buttonWidth={"80px"}
            text={"เพิ่ม"}
            bgColor={themeColor.blue_1}
            // style={{ backgroundColor: themeColor.blue_1 }}
          />
          <Button buttonWidth={"80px"} text={"ส่งออก"} />
        </LeftContainer>
        <FilterContainer>
          <SearchFilterContainer>
            <FiSearch style={{ color: themeColor.blue_1 }} />
            <SearchFilter
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={"ค้นหา"}
            />
          </SearchFilterContainer>
        </FilterContainer>
      </ManageContainer>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              {tableHeader.map((item, index) => {
                return (
                  <TableHeader width={sizeColumn[index]}>{item}</TableHeader>
                );
              })}
              {/* <TableHeader width={tableRowWidth}>ชื่อครุภัณฑ์</TableHeader>
              <TableHeader width={tableRowWidth2}>หมายเลขครุภัณฑ์</TableHeader>
              <TableHeader width={tableRowWidth3}>
                วัน/เดือน/ปี ที่ซื้อ
              </TableHeader>
              <TableHeader width={tableRowWidth4}>
                {"ราคาครุภัณฑ์(หน่วย)"}
              </TableHeader>
              <TableHeader width={tableRowWidth5}>ประเภทครุภัณฑ์</TableHeader>

              <TableHeader width={tableRowWidth6}>สภาพครุภัณฑ์</TableHeader> */}
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
