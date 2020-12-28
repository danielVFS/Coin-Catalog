import React from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  function signIn() {
    setUserToken("token");
    setIsLoading(false);
  }

  function signOut() {
    setUserToken(null);
    setIsLoading(false);
  }
  function signUp() {
    setUserToken("token");
    setIsLoading(false);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
