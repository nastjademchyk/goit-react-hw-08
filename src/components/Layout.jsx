import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
