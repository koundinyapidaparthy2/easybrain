import { all, fork } from "redux-saga/effects";
import testsaga from "./testsaga"; // Import your sagas
import signinSaga from "./signInSaga";
import loginSaga from "./logInSaga";
const sagas = [testsaga, signinSaga, loginSaga];
// Add other sagas as needed
export default function* rootSaga() {
  yield all(sagas.map((eachSaga) => fork(eachSaga)));
}
