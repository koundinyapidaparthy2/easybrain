import React from "react";
import Grid from "@mui/material/Grid";
import "./styles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      spacing={2}
    >
      <Grid item xs={6} md={7}>
        <img
          src="./title.png"
          loading="lazy"
          className="headerImage"
          data-testid="headerImage"
          onClick={navigateToHome}
        />
      </Grid>
      <Grid item xs={5} md={4}>
        {/* Header Links Are Here */}
        <Grid container justifyContent={"space-around"} alignItems={"center"}>
          <Grid item>
            <Link to={"About"}>About</Link>
          </Grid>
          <Grid item>
            <Link to={"Contact"}>Contact</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <AccountCircleIcon color="primary" />
      </Grid>
    </Grid>
  );
};

export default Header;
