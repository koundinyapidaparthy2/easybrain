import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "components/Button/index.tsx";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "components/TextField/index.tsx";
import Typography from "@mui/material/Typography";
import "./styles.css";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Firebase";
import FormHelperText from "@mui/material/FormHelperText";
import { LOG_IN_ACTION } from "../../actions";
import { useDispatch } from "react-redux";
import {
  checkValidPassword,
  checkValidEmail,
  ERROR_MESSAGES,
} from "../../utils";
import { enqueueSnackbar } from "notistack";
import HideSnackbar from "../Snackbar/HideSnackbar";

const provider = new GoogleAuthProvider();

// firebase

const Login = () => {
  const userEmailRef = React.useRef(null);
  const userPasswordRef = React.useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorList, setErrorList] = React.useState({});

  const handleOnLogin = () => {
    navigate("/signin");
  };
  const handleLogin = () => {
    const email = userEmailRef.current.value;
    const password = userPasswordRef.current.value;
    let currentErrorList = {};
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
    if (Object.keys(currentErrorList).length > 0) {
      setErrorList(currentErrorList);
    } else {
      setErrorList(currentErrorList);
      dispatch({
        type: LOG_IN_ACTION.PENDING,
        payload: {
          email,
          password,
          fromFrontEnd: true,
        },
      });
    }
  };
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({
          type: LOG_IN_ACTION.PENDING,
          payload: {
            email: user.email,
            googleId: user.uid,
            fromFrontEnd: true,
          },
        });
        window.close();
      })
      .catch((error) => {
        const errorMessage = error.message;
        enqueueSnackbar(errorList.googleAuthIssue, {
          variant: "error",
        });
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
                  className="userLoginImage"
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
                <Card elevation={15} className="cardForLogIn">
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
                        LogIn
                      </Typography>
                      <Typography variant="subtitle2" mb={2} color="secondary">
                        Welcome back! Let's solve our challenges...
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Enter email"
                        inputRef={userEmailRef}
                        color="secondary"
                        placeholder="Enter email"
                        required
                        helperText={errorList.email}
                        error={!!errorList.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Enter password"
                        inputRef={userPasswordRef}
                        placeholder="Enter password"
                        required
                        name="password"
                        type="password"
                        helperText={errorList.password}
                        error={!!errorList.password}
                      />
                      <FormHelperText
                        className="forgot_Passsword"
                        onClick={() => {}}
                      >
                        Forgot Password?
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent={"center"}
                        direction={"row"}
                      >
                        <Grid item>
                          <Button variant="contained" onClick={handleLogin}>
                            Log In
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
                            Didn't have an account ?{" "}
                          </Typography>
                        </Grid>
                        <Grid item className="login_Container">
                          <Link
                            color="secondary"
                            underline="hover"
                            onClick={handleOnLogin}
                          >
                            Create Account
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
                              className="logIn_HeaderImage"
                            />

                            <Typography variant="subtitle2">
                              Log In With Google
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

export default Login;
