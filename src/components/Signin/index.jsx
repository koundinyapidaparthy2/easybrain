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
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase";
import {
  checkValidPassword,
  checkValidEmail,
  checkValidString,
  ERROR_MESSAGES,
} from "../../utils";
import { SIGN_IN_ACTION } from "actions";
import { CircularProgress } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import HideSnackbar from "../Snackbar/HideSnackbar";

const provider = new GoogleAuthProvider();

// firebase

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userFirstNameRef = React.useRef(null);
  const userLastNameRef = React.useRef(null);
  const userEmailRef = React.useRef(null);
  const userPasswordRef = React.useRef(null);
  const userReEnterPasswordRef = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [errorList, setErrorList] = React.useState({});
  const fetchingUsers = useSelector((state) => state.user.fetching);

  const containErrorList = Object.keys(errorList).length > 0;

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  const handleOnLogin = () => {
    navigate("/login");
  };
  const handleSignIn = () => {
    const firstName = userFirstNameRef.current.value;
    const lastName = userLastNameRef.current.value;
    const email = userEmailRef.current.value;
    const password = userPasswordRef.current.value;
    const reEnterPassword = userReEnterPasswordRef.current.value;
    let currentErrorList = {};

    if (!checkValidString(firstName, 2)) {
      currentErrorList = {
        ...currentErrorList,
        firstName: ERROR_MESSAGES.firstName,
      };
    }
    if (!checkValidEmail(email, 4)) {
      currentErrorList = {
        ...currentErrorList,
        email: ERROR_MESSAGES.email,
      };
    }
    if (!checkValidPassword(password, 2)) {
      enqueueSnackbar(
        <div className="passwordErrorContainer">
          <div
            dangerouslySetInnerHTML={{
              __html: ERROR_MESSAGES.passwordFormat,
            }}
          />
        </div>,
        {
          key: "passwordErrorContainer",
          variant: "error",
          persist: true,
          preventDuplicate: true,
          action: (key) => <HideSnackbar currentKey={key} />,
        }
      );
      currentErrorList = {
        ...currentErrorList,
        password: ERROR_MESSAGES.password,
      };
    }
    if (
      !checkValidPassword(reEnterPassword, 2) ||
      reEnterPassword !== password
    ) {
      currentErrorList = {
        ...currentErrorList,
        confirmPassword: ERROR_MESSAGES.confirmValidPassword,
      };
    }
    if (Object.keys(currentErrorList).length > 0) {
      setErrorList(currentErrorList);
    } else {
      setErrorList(currentErrorList);
      dispatch({
        type: SIGN_IN_ACTION.PENDING,
        payload: {
          firstName,
          lastName,
          email,
          password,
          phone: phoneNumber,
        },
      });
    }
  };
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log({ user });
        const [firstName, lastName] = user.displayName.split(" ") || ["", ""];
        console.log({
          firstName,
          lastName,
          email: user.email,
          googleId: user.uid,
          fromFrontEnd: true,
        });
        dispatch({
          type: SIGN_IN_ACTION.PENDING,
          payload: {
            firstName,
            lastName,
            email: user.email,
            googleId: user.uid,
            fromFrontEnd: true,
          },
        });
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
                    spacing={containErrorList ? 1 : 2}
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
                            inputRef={userFirstNameRef}
                            color="secondary"
                            placeholder="Enter firstname"
                            error={!!errorList.firstName}
                            helperText={errorList.firstName}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Enter lastname"
                            name="text"
                            inputRef={userLastNameRef}
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
                        inputRef={userEmailRef}
                        color="secondary"
                        placeholder="Enter email"
                        error={!!errorList.email}
                        helperText={errorList.email}
                        required
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
                            inputRef={userPasswordRef}
                            placeholder="Enter password"
                            error={!!errorList.password}
                            helperText={errorList.password}
                            required
                            type="password"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            label="Confirm password"
                            inputRef={userReEnterPasswordRef}
                            placeholder="Confirm password"
                            error={!!errorList.confirmPassword}
                            helperText={errorList.confirmPassword}
                            required
                            type="password"
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
                          <Button variant="contained" onClick={handleSignIn}>
                            {fetchingUsers ? <CircularProgress /> : "SignIn"}
                          </Button>
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
