import HttpService from "./HttpService";

//Registeration service
export const RegisterUserService = (credentials) => {
  const http = new HttpService();
  let signupUrl = "users/register";

  return http
    .postData(credentials, signupUrl)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      return err;
    });
};

//Login Service
export const LoginUserService = (credentials) => {
  const http = new HttpService();
  let loginUrl = "users/login";
  return http
    .postData(credentials, loginUrl)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

//logout service
export const LogOutUserService = () => {
  const http = new HttpService();
  let loginUrl = "users/logout";
  const tokenId = "user-token";
  return http
    .getData(loginUrl, tokenId)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};
