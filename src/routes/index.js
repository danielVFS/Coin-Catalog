import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import SplashScreen from "../screens/Splash";

function Routes() {
  const signed = false;
  const loading = false;

  if (loading) {
    return <SplashScreen />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
