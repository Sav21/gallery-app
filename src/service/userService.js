import { API } from "../shared/api";

export const registerUser = (first_name,last_name, email, password) => {
  return API.post("/signup", {
    first_name,
    last_name,
    email,
    password,

  });
};

export const logIn = (email, password) => {
  return API.post("/login", {
    email,
    password,
  });
};
