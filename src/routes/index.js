import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import SplashScreen from "../screens/Splash";

import { AuthContext } from "../hooks/authContext";

function Routes() {
  const { isLoading, userToken } = React.useContext(AuthContext);

  if (isLoading) {
    return <SplashScreen />;
  }

  return userToken ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
