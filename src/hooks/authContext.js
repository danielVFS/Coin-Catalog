import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const initialLoginState = {
    isLoading: true,
    userEmail: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userEmail: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (email, password) => {
        console.log(email, password);
        let userToken;
        // ainda com informações estáticas
        if (email === "user" && password == "123") {
          userToken = "token";
        }

        dispatch({ type: "LOGIN", email: email, token: userToken });
      },
      signOut: () => {
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("token");
        setIsLoading(false);
      },
    }),
    []
  );

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "RETRIEVE_TOKEN", token: "token" });
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading: loginState.isLoading,
        userToken: loginState.userToken,
        signIn: authContext.signIn,
        signUp: authContext.signUp,
        signOut: authContext.signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
