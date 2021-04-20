import React, { useState, useEffect } from "react";
import {
  LoginScreenContainer,
  LoginContainer,
  ImageContainer,
  LoginFormContainer,
  ButtonSubmit,
  TopContainer,
  AlertText,
} from "./LoginScreenStyle";
import LoginImage from "./login-image.svg";
import { useForm, Controller } from "react-hook-form";
import { Text } from "../../GlobalStyle";
import InputText from "../../components/inputText/InputText";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import { useHistory, Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { loadUser } from "../../actions/authActions";
import store from "../../store";

const LoginScreen = (props) => {
  const { handleSubmit, reset, watch, control } = useForm();
  const [isValid, setIsValid] = useState(true);
  //   const onSubmit = (data) => console.log(data);
  const history = useHistory();
  const onSubmit = (data) => {
    const { mUsername, mPassword } = data;
    const { error } = props;
    const user = {
      mUsername,
      mPassword,
    };
    // Attempt to login
    props.login(user);

    // history.push("/assetP");

    // console.log(props.isAuthenticated);
    // history.push("/assetP");
  };
  useEffect(() => {
    const { id } = props.error;
    if (id == "LOGIN_FAIL") {
      setIsValid(false);
    }
  }, [props.error]);
  useEffect(() => {
    if (props.isAuthenticated) {
      history.push("/assetP");
    }
  }, [props.isAuthenticated]);
  return (
    <LoginScreenContainer>
      <LoginContainer>
        <TopContainer>
          <ImageContainer src={LoginImage} />
          <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
            <Text
              style={{ alignSelf: "center" }}
              fontSize={"42px"}
              color={"gray"}
              fontWeight={"500"}
            >
              เข้าสู่ระบบ
            </Text>
            <Controller
              render={({ field }) => (
                <InputText
                  field={{ ...field }}
                  onChange={field.onChange}
                  style={{ margin: "20px 0" }}
                  textDesc={"ชื่อผู้ใช้"}
                  placeholder={"กรุณากรอกชื่อผู้ใช้"}
                  showBlind={false}
                  isValid={isValid}
                />
              )}
              control={control}
              name="mUsername"
              defaultValue={""}
            />
            <Controller
              render={({ field }) => (
                <InputText
                  field={{ ...field }}
                  onChange={field.onChange}
                  textDesc={"รหัสผ่าน"}
                  placeholder={"กรุณากรอกรหัสผ่าน"}
                  showBlind={true}
                  type={"password"}
                  isValid={isValid}
                />
              )}
              control={control}
              name="mPassword"
              //   defaultValue={""}
            />
            {!isValid && (
              <AlertText style={{ color: "#f55442" }}>
                <BiErrorCircle />
                <Text
                  style={{ alignSelf: "flex-start" }}
                  fontSize={"14px"}
                  isValid={false}
                >
                  ชื่อผู้ใช้หรือ พาสเวิร์ดไม่ถูกต้อง
                </Text>
              </AlertText>
            )}

            <ButtonSubmit>เข้าสู่ระบบ</ButtonSubmit>
          </LoginFormContainer>
        </TopContainer>
      </LoginContainer>
    </LoginScreenContainer>
  );
};
// class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "eiei",
//     };
//     const defaultValues = {
//       select: "",
//       input: "",
//     };
//     const { handleSubmit, reset, watch, control } = useForm({ defaultValues });
//   }

//   render() {
//     return (

//     );
//   }
// }
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  state,
});
export default connect(mapStateToProps, { login, clearErrors, loadUser })(
  LoginScreen
);
