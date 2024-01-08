import logo from './logo.svg';
import './App.css';
import Routes from "Router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Provider } from "react-redux";
import store from "store";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
