import { SIGN_IN_ACTION, LOG_IN_ACTION } from "actions";

const signInReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION.PENDING:
      return {
        ...state,
        fetching: true,
      };
    case SIGN_IN_ACTION.SUCCESS:
      return {
        fetching: false,
        ...(action.payload || {}),
      };
    case SIGN_IN_ACTION.ERROR:
      return {
        fetching: false,
        ...(action.error || {}),
      };
    case LOG_IN_ACTION.PENDING:
      return {
        ...state,
        fetching: true,
      };
    case LOG_IN_ACTION.SUCCESS:
      return {
        fetching: false,
        ...(action.payload || {}),
      };
    case LOG_IN_ACTION.ERROR:
      return {
        fetching: false,
        ...(action.error || {}),
      };
    default:
      return state;
  }
};

export default signInReducer;
