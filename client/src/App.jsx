import React, { useState, useEffect } from "react";
import AppNavbar from "./components/AppNavbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginScreen from "./screens/loginscreen/LoginScreen";
import HomePage from "./components/HomePage.jsx";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";
import AssetPage from "./components/AssetPage.jsx";
import UserPage from "./components/UserTabs/AllTabPanes.jsx";
import reportPage from "./components/ReportPage.jsx";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { loadUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { ScreenContainer, ManageScreenContainer } from "./GlobalStyle";
import NavBar from "./components/NavigationBar/NavBar";
import UserBar from "./components/UserBar/UserBar";
import AssetScreen from "./screens/AssetScreen/AssetScreen";
const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  const { location } = useLocation();
  return (
    <Provider store={store}>
      <Route path="/" exact component={LoginScreen} />
      <ScreenContainer>
        <UserBar
          setToggleDropdown={setToggleDropdown}
          toggleDropdown={toggleDropdown}
        />
        <ManageScreenContainer onClick={() => setToggleDropdown(false)}>
          <NavBar />
          <Switch location={location}>
            <Route path="/assetP" component={AssetScreen} />
            <Route path="/userP" component={UserPage} />
            <Route path="/reportP" component={reportPage} />
          </Switch>
        </ManageScreenContainer>
      </ScreenContainer>
    </Provider>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  state,
});
export default withRouter(App);
