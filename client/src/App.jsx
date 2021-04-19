import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginScreen from "./screens/loginscreen/LoginScreen";
import HomePage from "./components/HomePage.jsx";
import { Switch, Route, withRouter } from "react-router-dom";
import AssetPage from "./components/AssetPage.jsx";
import UserPage from "./components/UserTabs/AllTabPanes.jsx";
import reportPage from "./components/ReportPage.jsx";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { loadUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { ScreenContainer } from "./GlobalStyle";
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { location } = this.props;
    return (
      <Provider store={store}>
        <ScreenContainer>
          <AppNavbar />
          <Switch location={location}>
            <Route path="/" exact component={LoginScreen} />
            <Route path="/assetP" exact component={AssetPage} />
            <Route path="/userP" exact component={UserPage} />
            <Route path="/reportP" exact component={reportPage} />
          </Switch>
        </ScreenContainer>
      </Provider>
    );
  }
}

export default withRouter(App);
