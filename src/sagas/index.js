import { all, fork } from "redux-saga/effects";
import testsaga from "./testsaga"; // Import your sagas

const sagas = [testsaga];
// Add other sagas as needed
export default function* rootSaga() {
  yield all(sagas.map((eachSaga) => fork(eachSaga)));
}
