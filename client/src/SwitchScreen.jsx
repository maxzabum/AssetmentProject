import React from "react";
import { connect } from "react-redux";
import store from "../../store";
const SwitchScreen = () => {
  return <div></div>;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  state,
});
export default connect(mapStateToProps, {})(SwitchScreen);
