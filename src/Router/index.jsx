import React, { Suspense } from "react";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import history from "./history";
import Fallback from "components/Fallback";
import { PublicRoutes, PrivateRoutes } from "./routerList";
import Header from "components/Header";
import Snackbar from "components/Snackbar";
import { useSelector } from "react-redux";
const RoutesComponent = () => {
  const accessToken = useSelector((state) => state?.user?.accessToken);
  return (
    <Router basename="/" history={history}>
      <Snackbar />
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          {PublicRoutes.map(({ Component, path }, index) => {
            return (
              <Route key={path + index} path={path} element={<Component />} />
            );
          })}
          {PrivateRoutes.map(({ Component, path }, index) => {
            return (
              <Route
                key={path + index}
                path={path}
                element={
                  accessToken ? (
                    <Component />
                  ) : (
                    <Navigate to={"/login"} replace={true} />
                  )
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesComponent;
