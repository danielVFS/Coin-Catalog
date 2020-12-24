import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes() {
  const signed = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
