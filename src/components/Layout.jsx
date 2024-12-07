import AppBar from "./AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
};

export default Layout;

//in fallback I can add spinner
