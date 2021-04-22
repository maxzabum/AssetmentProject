import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem, updateItem } from "../../actions/itemActions";
import { getItemTypes } from "../../actions/itemTypeActions";
import { getFixs } from "../../actions/fixActions";
import { getRooms } from "../../actions/roomActions";
import { getOwners } from "../../actions/ownerActions";
import { getUsers } from "../../actions/userActions";
import AssetScreen from "./AssetScreen";
import NavBar from "../../components/NavigationBar/NavBar";
import UserBar from "../../components/UserBar/UserBar";
import {
  Switch,
  Route,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { ManageContainer } from "./AssetScreenStyle";
import { ManageScreenContainer } from "../../GlobalStyle";
const IndexScreen = (props) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { url } = useRouteMatch();
  useEffect(() => {
    props.getItems();
    props.getFixs();
    props.getItemTypes();
    props.getRooms();
    props.getOwners();
    props.getUsers();
  }, []);

  return (
    <div>
      <UserBar
        setToggleDropdown={setToggleDropdown}
        toggleDropdown={toggleDropdown}
      />
      <ManageScreenContainer onClick={() => setToggleDropdown(false)}>
        <NavBar />
        {/* <button onClick={() => console.log(url)}>click</button> */}
        <Route path={`${url}/assetment`}>
          <AssetScreen
            textHeader={"ข้อมูลครุภัณฑ์"}
            data={props.item.items}
            keyData={["aName", "aSerial", "aDate", "aPrice", "cID", "aStatus"]}
            tableHeader={[
              "ชื่อครุภัณฑ์",
              "หมายเลขครุภัณฑ์",
              "วัน/เดือน/ปี ที่ซื้อ",
              "ราคาครุภัณฑ์(หน่วย)",
              "ประเภทครุภัณฑ์",
              "สภาพครุภัณฑ์",
            ]}
            sizeColumn={["20%", "15%", "15%", "12.5%", "15%", "10%", "12.5%"]}
          />
        </Route>
        <Route path={`${url}/typeassetment`}>
          <AssetScreen
            textHeader={"ข้อมูลประเภทครุภัณฑ์"}
            data={props.itemType}
            keyData={["cID", "cName", "cStatus"]}
            tableHeader={["รหัสประเภทครุภัณฑ์", "ชื่อประเภทครุภัณฑ์", "สถานะ"]}
            sizeColumn={["20%", "30%", "20%"]}
          />
        </Route>
        <Route path={`${url}/assetrooms`}>
          <AssetScreen
            textHeader={"ข้อมูลห้อง"}
            data={props.rooms}
            keyData={["rName", "rtypeID", "rStatus"]}
            tableHeader={["ชื่อห้อง", "ประเภทห้อง", "สถานะ"]}
            sizeColumn={["20%", "30%", "20%"]}
          />
        </Route>
        <Route path={`${url}/assetfixs`}>
          <AssetScreen
            textHeader={"ข้อมูลการส่งซ่อมครุภัณฑ์"}
            data={props.fixAsset}
            keyData={["aID", "fReason", "fPrice", "fFixDate", "fStatus"]}
            tableHeader={[
              "ชื่อครุภัณฑ์",
              "สาเหตุที่ซ่อม",
              "ราคาการซ่อม",
              "วันที่ส่งซ่อม",
              "สถานะ",
            ]}
            sizeColumn={["20%", "20%", "15%", "15%", "15%"]}
          />
        </Route>
        <Route path={`${url}/assetowners`}>
          <AssetScreen
            textHeader={"ข้อมูลผู้รับผิดชอบ"}
            data={props.owners}
            keyData={["pName", "pStatus"]}
            tableHeader={["ชื่อผู้รับผิดชอบ", "สถานะ"]}
            sizeColumn={["50%", "30%"]}
          />
        </Route>
        <Route path={`${url}/assetusers`}>
          <AssetScreen
            textHeader={"ข้อมูลผู้ดูแลระบบ"}
            data={props.users}
            keyData={[
              "mUsername",
              "mName",
              "mMail",
              "mTell",
              "mStatus",
              "mPer",
            ]}
            tableHeader={[
              "ชื่อผู้ใช้",
              "ชื่อผู้ดูแลระบบ",
              "อีเมล",
              "เบอร์โทรศัพท์",
              "ระดับ",
              "สถานะ",
            ]}
            sizeColumn={["20%", "20%", "15%", "15%", "10%", "10%"]}
          />
        </Route>
      </ManageScreenContainer>
    </div>
  );
};
const mapStateToProps = (state) => ({
  item: state.item,
  itemType: state.itemType.items,
  rooms: state.room.items,
  fixAsset: state.fixAsset.items,
  owners: state.owners.items,
  users: state.users.items,
  auth: state.auth,
  state,
});
export default connect(mapStateToProps, {
  getItems,
  updateItem,
  deleteItem,
  getItemTypes,
  getRooms,
  getFixs,
  getUsers,
  getOwners,
})(IndexScreen);