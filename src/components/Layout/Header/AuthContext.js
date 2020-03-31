import React, {createContext, useState } from "react";
import { isAuthenticated as Auth } from "../../../utils/jwtUtil";
import { LOGGED_IN_USER_EMAIL } from "../../../constants/appConfig";

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

const AuthProvider = (props) => {
  const [user,setUser]= useState( getLocalStorage("user") || {})
  const [isAuthenticated, setIsAuthenticated]=useState(Auth||false)


 
  const  login = ({ email, password }) => {
    alert(JSON.stringify({ email, password }))
    setLocalStorage(LOGGED_IN_USER_EMAIL, email);
    setUser({user: email})
    setIsAuthenticated(true)
  };

  const logout = () => {
    clearLocalStorage(LOGGED_IN_USER_EMAIL);
  };

  const register = ({ email, password, name }) => {
    alert(JSON.stringify({ email, password, name }))
    console.log("I am registering");
    
  };

  const goToDashboard = () => {
    history.push({ pathname: "/dashboard" });
  };


    return (
      <AuthContext.Provider
        {...props}
        value={{
          ...user,isAuthenticated,
          login: login,
          logout: logout,
          register: register,
          goToDashboard: goToDashboard
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
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
