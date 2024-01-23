import React from "react";
import { MuiTelInput } from "mui-tel-input";
import type { MuiTelInputProps } from "mui-tel-input";
import "./styles.css";
import clsx from "clsx";

const MuiTelInputComponent = (props: MuiTelInputProps) => {
  return (
    /* @ts-ignore */
    <MuiTelInput
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

export default MuiTelInputComponent;
