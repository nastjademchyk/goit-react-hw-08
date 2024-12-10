import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { RestrictedRoute } from "../components/RestrictedRoute";
import { PrivateRoute } from "../components/PrivateRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { refreshUser } from "../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Hourglass
        visible={true}
        height="40"
        width="40"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#ffffff", "#ffffff"]}
      />
    </div>
  ) : (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
