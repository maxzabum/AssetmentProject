import React, { useState, useEffect } from "react";
import {
  FormDetailContainer,
  ImageContainer,
  TextContainer,
  Image,
  TextField,
  DetailContainer,
  HeaderContainer,
} from "./FormDetailComponent";

import { connect } from "react-redux";
import { Text, themeColor } from "../../GlobalStyle";
const FormDetailComponent = (props) => {
  const [item, setItem] = useState([{ key: "", value: "" }]);
  const textStyle = {
    fontSize: "16px",
    fontWeight: 400,
  };
  useEffect(() => {
    setItem(props.dataDetail);
  }, [props.dataDetail]);
  return (
    <FormDetailContainer onClick={() => console.log(props.dataDetail.item[0])}>
      <HeaderContainer>
        <Text
          style={{ color: themeColor.gray_2, fontSize: 20, fontWeight: 400 }}
        >
          รายละเอียด
        </Text>
      </HeaderContainer>
      <DetailContainer>
        <ImageContainer>
          <Image src={"https://source.unsplash.com/random/300x300"} />
        </ImageContainer>
        <TextContainer>
          {props.dataDetail.item.map((item, index) => {
            return (
              <TextField>
                <Text style={textStyle} color={themeColor.blue_1}>
                  {item.key}
                </Text>
                <p style={{ margin: "0 10px", color: themeColor.blue_1 }}>:</p>
                <Text style={textStyle} color={"#5e5e5e"}>
                  {item.text}
                </Text>
              </TextField>
            );
          })}
        </TextContainer>
      </DetailContainer>
    </FormDetailContainer>
  );
};
const mapStateToProps = (state) => ({
  dataDetail: state.dataDetail,
});
export default connect(mapStateToProps, {})(FormDetailComponent);
