import { combineReducers } from "@reduxjs/toolkit";
import reducers from "./reducerList";

const rootReducer = combineReducers({
  ...reducers,
});

export default rootReducer;
