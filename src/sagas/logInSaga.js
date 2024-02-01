// sagas/counterSaga.js
import { put, call, takeEvery } from "redux-saga/effects";
import { LOG_IN_ACTION } from "actions";
import { ERROR_MESSAGES_FOR_SAGAS } from "../utils";
import { loginUser } from "api/user";
import { enqueueSnackbar } from "notistack";
import history from "Router/history";
// Worker saga
function* handleLoginActionAsync({ payload }) {
  try {
    if (payload) {
      const response = yield call(loginUser, payload);
      if (!response.error) {
        enqueueSnackbar(response.message, { variant: "success" });
        localStorage.setItem("accessToken", response.accessToken);
        yield put({
          type: LOG_IN_ACTION.SUCCESS,
          payload: response.accessToken,
        });
        history.push("/");
      } else {
        throw new Error(response.message);
      }
    } else {
      throw new Error(ERROR_MESSAGES_FOR_SAGAS.userDetails);
    }
  } catch (e) {
    enqueueSnackbar(e.message, { variant: "error" });
    yield put({ type: LOG_IN_ACTION.ERROR, error: { message: e.message } });
  }
}

// Watcher saga
export default function* logInActionAsync() {
  yield takeEvery(LOG_IN_ACTION.PENDING, handleLoginActionAsync);
}
