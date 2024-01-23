import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import "./styles.css";
import clsx from "clsx";
const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      color="secondary"
      className={clsx(["buttonStyles", props?.className])}
      fullWidth
      {...props}
    />
  );
};

export default CustomButton;
