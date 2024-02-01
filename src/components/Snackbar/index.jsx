import React from "react";
import { SnackbarProvider } from "notistack";

const Snackbar = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
      hideIconVariant
    />
  );
};

export default Snackbar;
