import React, { Component, createContext } from "react";
import axios from "axios";
import { isAuthenticated } from "../../../utils/jwtUtil";
import {
  API_URL,
  JWT_TOKEN,
  LOGGED_IN_USER_EMAIL,
  USER_FULL_NAME,
  USER_ID
} from "../../../constants/appConfig";

import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage
} from "../../../utils/storageUtil";
import history from "../../../utils/history";

const AuthContext = createContext({
  user: {},
  isAuthenticated: false
});

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  state = {
    user: getLocalStorage("user") || {},
    isAuthenticated: isAuthenticated() || false
  };

  login = ({ email, password }) => {
    return axios
      .post(
        `${API_URL}api/login`,
        { email, password },
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response => {        
        setLocalStorage(JWT_TOKEN, response.data.data.token);
        setLocalStorage(USER_ID, response.data.data.id);
        setLocalStorage(LOGGED_IN_USER_EMAIL, response.data.data.email);
        setLocalStorage(USER_FULL_NAME, response.data.data.name);
        this.setState({ isAuthenticated: true, user: response.data.data });
        history.push("/");
        return response;
      });
  };

  logout = () => {
    clearLocalStorage("token");
    clearLocalStorage(JWT_TOKEN);
    clearLocalStorage(USER_ID);
    clearLocalStorage(LOGGED_IN_USER_EMAIL);
    clearLocalStorage(USER_FULL_NAME);
    this.setState({ user: {}, isAuthenticated: false });
  };

  register = ({ email, password, name }) => {
    return axios.post(API_URL + "api/user", {
      email,
      password,
      name
    });
  };

  goToDashboard = () => {
    history.push({ pathname: "/dashboard" });
  };

  render() {
    return (
      <AuthContext.Provider
        {...this.props}
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
          register: this.register,
          goToDashboard: this.goToDashboard
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer, AuthContext };

export const withContext = Component => {
  return props => {
    return (
      <AuthContext.Consumer>
        {globalState => {
          return <Component {...globalState} {...props} />;
        }}
      </AuthContext.Consumer>
    );
  };
};
