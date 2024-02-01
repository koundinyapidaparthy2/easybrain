export const checkValidString = (strValue, index = 1) => {
  return (
    strValue && typeof strValue === "string" && strValue.trim().length >= index
  );
};

export const checkValidNumber = (numValue) => {
  return numValue && typeof numValue === "number";
};

export const checkValidArray = (arrValue, index) => {
  return arrValue && Array.isArray(arrValue) && arrValue.length >= index;
};

export const checkValidEmail = (emailStr, index = 1) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log({ emailTest: emailRegex.test(emailStr) });
  return checkValidString(emailStr, index) && emailRegex.test(emailStr);
};

export const checkValidPhoneNo = (emailStr, index = 1) => {
  const mobileNumberRegex = /^\d{10}$/;
  return checkValidArray(emailStr, index) && mobileNumberRegex.test(emailStr);
};

export const checkValidPassword = (passwordStr, index = 1) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,}$/;
  return (
    checkValidString(passwordStr, index) && passwordRegex.test(passwordStr)
  );
};

export const ERROR_MESSAGES = {
  firstName: "Provide valid username",
  email: "Provide valid email",
  password: "Provide valid password",
  confirmValidPassword: "Password Must be identical",
  passwordFormat:
    "<div>At least 10 characters long</div><div>At least a uppercase and a lowercase letter</div> <div>At least a number, and a special character from ( !@#$%^&*()_+ )</div>",
  googleAuthIssue: "Authentication Issue",
};

export const ERROR_MESSAGES_FOR_SAGAS = {
  userDetails: "User details are not provided",
};

export const API_COMMON_ROUTE_PATHS = {
  auth: "/auth",
};
