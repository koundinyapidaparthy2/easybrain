import React from "react";
import "./App.css";
import Routes from "Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Provider } from "react-redux";
import store from "./store";
import { axiosInstace } from "api";

function App() {
  React.useEffect(() => {
    async function backConnectionCheck() {
      try {
        const backendConnection = await axiosInstace.get("/");

        console.log(
          `%c${backendConnection.data}`,
          "color: white; font-weight: bold; background-color: #03a870; padding: 5px; border-radius: 6px"
        );
      } catch (e) {
        console.log(
          "%c Backend is not connected",
          "color: white; font-weight: bold; background-color: red; padding: 5px;"
        );
      }
    }
    backConnectionCheck();
    return () => {};
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
