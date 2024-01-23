import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./styles.css";
const UserProfile = ({ navigateToSignIn = () => {} }) => {
  return (
    <AccountCircleIcon
      color="primary"
      className="cursorPointer"
      onClick={navigateToSignIn}
    />
  );
};

export default UserProfile;
