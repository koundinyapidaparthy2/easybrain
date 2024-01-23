import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "components/Button/index.tsx";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "components/TextField/index.tsx";
import Typography from "@mui/material/Typography";
import "./styles.css";
import MuiTelInput from "components/MuiTelInput/index.tsx";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase";
const provider = new GoogleAuthProvider();

// firebase

const SignIn = () => {
  const userEmailRef = React.useRef(null);
  const userPasswordRef = React.useRef(null);
  const userReEnterPasswordRef = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const navigate = useNavigate();
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  const handleOnLogin = () => {
    navigate("/login");
  };
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log({ user });
        window.close();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        window.close();
      });
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      className="customStylesWrapper"
      direction={"row"}
    >
      <Grid item xs={12}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid
            item
            xs={false}
            sm={false}
            md={4}
            lg={4}
            className="imageContainer"
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
            >
              <Grid item xs={12} sm={5} md={6} lg={6}>
                <img
                  src="./userSigninStorySet.gif"
                  className="userLoginSignInImage"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={6} md={7} lg={7}>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
            >
              <Grid item xs={11} sm={11} md={11} lg={6}>
                <Card elevation={15} className="cardForSignIn">
                  <Grid
                    container
                    direction={"row"}
                    spacing={2}
                    className="CardContainerGridWrapper"
                  >
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color={"primary"}
                        fontWeight={900}
                      >
                        SignIn
                      </Typography>
                      <Typography variant="subtitle2" mb={2} color="secondary">
                        Lets beggin your journey...
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        spacing={2}
                      >
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Enter firstname"
                            name="text"
                            ref={userEmailRef}
                            color="secondary"
                            placeholder="Enter firstname"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Enter lastname"
                            name="text"
                            ref={userEmailRef}
                            color="secondary"
                            placeholder="Enter lastname"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Enter email"
                        name="text"
                        ref={userEmailRef}
                        color="secondary"
                        placeholder="Enter email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MuiTelInput
                        defaultCountry="US"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        label={"Enter phone number"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={2}
                      >
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Enter password"
                            ref={userPasswordRef}
                            placeholder="Enter password"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Confirm password"
                            ref={userReEnterPasswordRef}
                            placeholder="Confirm password"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent={"center"}
                        direction={"row"}
                      >
                        <Grid item>
                          <Button variant="contained">SignIn</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Grid item>
                          <Typography variant="subtitle2">
                            Already have an account ?{" "}
                          </Typography>
                        </Grid>
                        <Grid item className="login_Container">
                          <Link
                            color="secondary"
                            underline="hover"
                            onClick={handleOnLogin}
                          >
                            Login
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className="dividerGrid">
                      <Divider flexItem variant="middles" component={"li"}>
                        <Chip label="Or" size="small" />
                      </Divider>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        direction={"row"}
                      >
                        <Grid item>
                          <Button
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            className="buttonContainer"
                            onClick={handleSignInWithGoogle}
                          >
                            <img
                              src="./google.png"
                              loading="lazy"
                              className="signIn_HeaderImage"
                            />

                            <Typography variant="subtitle2">
                              Sign In With Google
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
