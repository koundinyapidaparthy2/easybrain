import React from "react";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { closeSnackbar } from "notistack";
import "./styles.css";
const HideSnackbar = ({ currentKey }) => {
  return (
    <HighlightOffOutlinedIcon
      size="small"
      className="snackBar_Close_Icons_Styles"
      onClick={() => (currentKey ? closeSnackbar(currentKey) : {})}
    />
  );
};

export default HideSnackbar;
