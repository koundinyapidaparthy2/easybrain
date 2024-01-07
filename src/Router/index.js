import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fallback from "components/Fallback";
import { PublicRoutes, PrivateRoutes } from "./routerList";
import Header from "components/Header";

const RoutesComponent = () => {
  return (
    <Router basename="/">
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
              <Route key={path + index} path={path} element={<Component />} />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesComponent;
