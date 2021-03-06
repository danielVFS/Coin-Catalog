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
      signIn: async (foundUser) => {
        const userToken = String(foundUser[0].userToken);
        const email = foundUser[0].email;

        try {
          userToken = "token";
          await AsyncStorage.setItem("@user_Token", userToken);
        } catch (e) {
          console.log(e);
        }

        dispatch({ type: "LOGIN", email: email, token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("@user_Token");
        } catch (e) {
          console.log(e);
        }

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
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("@user_Token");
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
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
