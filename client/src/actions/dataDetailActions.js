import {
  SET_ASSET_DETAIL,
  SET_FIXASSET_DETAIL,
  SET_USER_DETAIL,
} from "./types";

export const setAssetDetail = (item) => (dispatch) => {
  const completeData = [];
  const data = [
    { key: "หมายเลขครุภัณฑ์", text: item.aSerial },
    { key: "ชื่อครุภัณฑ์", text: item.aName },
    { key: "วัน/เดือน/ปี ที่ซื้อ", text: item.aDate },
    { key: "ราคา", text: item.aPrice },
    { key: "ประเภทครุภัณฑ์", text: item.cID },
    { key: "ห้องที่ใช้ครุภัณฑ์", text: item.rID },
    { key: "วิธีที่ได้รับ", text: item.aGet },
    { key: "สถานะ", text: item.aStatus },
    { key: "สาเหตุที่แทงจำหน่าย", text: item.aReason },
  ];
  dispatch({
    type: SET_ASSET_DETAIL,
    payload: data,
  });
  //   completeData = data;
  //   console.log(data);
};
