import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
const Fallback = ({ size }) => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <CircularProgress size={size || 25} />
      </Grid>
    </Grid>
  );
};

export default Fallback;
