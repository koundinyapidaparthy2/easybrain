import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { TEST_ACTION } from "actions";
const Contact = () => {
  const test = useSelector((state) => state.test);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch({
      type: TEST_ACTION.PENDING,
      payload: "My Text",
    });
  };
  console.log(test);
  return (
    <Grid container>
      <Grid item>
        <Button onClick={handleButtonClick}>Click Me</Button>
      </Grid>
      <Grid item>{test}</Grid>
    </Grid>
  );
};

export default Contact;
