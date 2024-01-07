import { lazy } from "react";
import ROUTEPATHS from "./routerPaths";
const SignIn = lazy(() => import("components/Signin"));
const LogIn = lazy(() => import("components/Login"));
const Home = lazy(() => import("components/Home"));
const Contact = lazy(() => import("components/Contact"));
const About = lazy(() => import("components/About"));

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
    Component: Contact,
    path: ROUTEPATHS.CONTACT,
  },
  {
    Component: About,
    path: ROUTEPATHS.ABOUT,
  },
];
