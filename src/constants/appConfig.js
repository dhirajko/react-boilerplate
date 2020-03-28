export const API_URL = "https://common-backend.herokuapp.com/";
export const JWT_TOKEN = "token";
export const LOGGED_IN_USER_EMAIL = "sample-user-email";
export const USER_FULL_NAME = "sample-user-fullname";
export const USER_ID = "sample-user-id";


let date = new Date();
let year = date.getFullYear();

const APP_CONFIG = {
  brand: "sample_project",
  year: year
};


export default APP_CONFIG;

//regex
export const alphaRegex = RegExp(/^[a-zA-Z ]*$/);
export const effectiveDateFormat = "YYYY-MM-DD";
export const momentFormat = "MMMM Do YYYY, h:mm:ss a";
