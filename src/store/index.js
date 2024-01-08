// store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "reducers";
import rootSaga from "sagas";
import { preLoadedState } from "./initialValue";

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with Saga middleware
const store = configureStore({
  reducer: rootReducer,
  preloadedState: preLoadedState,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
