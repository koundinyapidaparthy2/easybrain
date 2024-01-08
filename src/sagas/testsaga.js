// sagas/counterSaga.js
import { put, takeEvery } from "redux-saga/effects";
import { TEST_ACTION } from "actions";

// Worker saga
function* handleTestActionAsync({ payload }) {
  yield put({ type: TEST_ACTION.SUCCESS, payload });
}

// Watcher saga
export default function* testActionAsync() {
  yield takeEvery(TEST_ACTION.PENDING, handleTestActionAsync);
}
