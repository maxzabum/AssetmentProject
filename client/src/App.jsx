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
import { getItems } from "./actions/itemActions";
import { getItemTypes } from "./actions/itemTypeActions";
import AssetScreen from "./screens/AssetScreen/AssetScreen";
import IndexScreen from "./screens/AssetScreen/index";
const App = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const { location } = useLocation();
  return (
    <Provider store={store}>
      <ScreenContainer>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route path="/assetPage" component={IndexScreen} />
        </Switch>
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
