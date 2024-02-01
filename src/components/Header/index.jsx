import React from "react";
import Grid from "@mui/material/Grid";
import "./styles.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../Router/routerList";
import UserProfile from "./UserProfile";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
const Header = () => {
  const navigate = useNavigate();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToSignIn = () => {
    navigate("/signin");
  };
  const handleRoute = (path) => {
    navigate(path);
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      spacing={2}
      className="headerwrapper"
    >
      <img
        class="custom-header-main-image-styles"
        src={
          !isMobileScreen
            ? "./Wave/Header_Main.svg"
            : "./Wave/Header_Main_Small_Screen.svg"
        }
        loading="lazy"
      />
      {isMobileScreen ? (
        <Grid item xs={1}>
          <MenuRoundedIcon color="primary" className="cursorPointer" />
        </Grid>
      ) : null}

      <Grid item xs={9} sm={8} className="imageGridItemWrapper">
        <img
          src="./title.svg"
          loading="lazy"
          className="headerImage"
          data-testid="headerImage"
          onClick={navigateToHome}
        />
      </Grid>
      {!isMobileScreen ? (
        <Grid item sm={3} className="header_Links">
          {/* Header Links Are Here */}
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
            {PrivateRoutes.map(({ path, label }) => {
              return (
                <Grid item key={path}>
                  <Link
                    onClick={() => handleRoute(path)}
                    underline="hover"
                    className="routePath"
                    color={"primary"}
                  >
                    {label}
                  </Link>
                </Grid>
              );
            })}
            <Grid item>
              <UserProfile navigateToSignIn={navigateToSignIn} />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={1}>
          <UserProfile navigateToSignIn={navigateToSignIn} />
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
