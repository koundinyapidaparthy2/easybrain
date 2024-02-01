import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#03176f",
    },
    secondary: {
      main: "#3F7AE5",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
