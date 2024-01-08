// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import testReducer from "./testReducer"; // Create a reducer for handling counter state

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  test: testReducer,
  // Add other reducers as needed
});

export default rootReducer;
