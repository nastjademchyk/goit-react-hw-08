import { DocumentTitle } from "../../components/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { DocumentTitle } from "../../components/DocumentTitle";

import React from "react";

const LoginPage = () => {
  return (
    <div>
      <DocumentTitle>LoginPage</DocumentTitle>;
      <LoginForm />;
    </div>
  );
};

export default LoginPage;
