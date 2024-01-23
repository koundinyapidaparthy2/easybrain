import { lazy } from "react";
import ROUTEPATHS from "./routerPaths";
const SignIn = lazy(() => import("components/Signin"));
const LogIn = lazy(() => import("components/Login"));
const Home = lazy(() => import("components/Home"));
const Courses = lazy(() => import("components/Courses"));
const Sprinters = lazy(() => import("components/Sprinters"));

export const PublicRoutes = [
  {
    Component: SignIn,
    path: ROUTEPATHS.SIGNIN,
  },
  {
    Component: LogIn,
    path: ROUTEPATHS.LOGIN,
  },
  {
    Component: Home,
    path: ROUTEPATHS.HOME,
  },
];

export const PrivateRoutes = [
  {
    Component: Courses,
    path: ROUTEPATHS.Courses,
    label: "Courses",
  },
  {
    Component: Sprinters,
    path: ROUTEPATHS.Sprinters,
    label: "Sprinters",
  },
];
