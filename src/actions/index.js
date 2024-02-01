import * as ActionTypes from "./types";

function customizeAction(actionString) {
  return {
    PENDING: actionString + "_PENDING",
    SUCCESS: actionString + "_SUCCESS",
    ERROR: actionString + "_ERROR",
  };
}

export const TEST_ACTION = customizeAction(ActionTypes.test_action);
export const SIGN_IN_ACTION = customizeAction(ActionTypes.SIGN_IN);
export const LOG_IN_ACTION = customizeAction(ActionTypes.LOG_IN);
