import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import "./styles.css";
import clsx from "clsx";

const CustomTextField = (props: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      color="secondary"
      classes={{
        root: clsx("textFieldStyles", props?.classes?.root),
      }}
      InputProps={{
        disableUnderline: true,
      }}
      {...props}
    />
  );
};

export default CustomTextField;
