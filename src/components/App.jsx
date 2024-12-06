import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import RestrictedRoute from "../components/RestrictedRoute";
import PrivateRoute from "../components/PrivateRoute";
// import { Suspense } from "react";

function App() {
  const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
  const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
  const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
  const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

  const dispatch = useDispatch();

  return (
    <div>
      <Layout>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={HomePage} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={RegisterPage}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* </Suspense> */}
      </Layout>
    </div>
  );
}

export default App;
