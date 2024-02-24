import client from "../axios";
import URLS from "../core/constants/urls";

export const login = ({ mobileNumber, password }) =>
  client.post(URLS.customerLogin, { mobileNumber, password });

export const getProfile = () => client.get(URLS.myProfile);

export const register = (data) => client.post(URLS.register, data);

export const changePassword = (data) => client.post(URLS.forgetPassword, data);
