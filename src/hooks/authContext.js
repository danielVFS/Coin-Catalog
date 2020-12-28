import React from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [userToken, setUserToken] = React.useState(null);

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
        let userToken;
        userName = null;
        // ainda com informações estáticas
        if (email === "user" && password === "123") {
          userToken = "token";
        }

        dispatch({ type: "LOGIN", email: email, token: userToken });
      },
      signOut: () => {},
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
