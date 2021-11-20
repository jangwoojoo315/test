import Cookie from "universal-cookie";

const cookies = new Cookie();
export const setCookie = (key, data) => {
  return cookies.set(key, data, { path: "/" });
};
export const getCookie = (key) => {
  return cookies.get(key);
};
export const removeCookie = (key) => {
  return cookies.remove(key);
};
