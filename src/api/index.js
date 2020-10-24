import axios from 'axios'

const URL = 'https://seo-kit.ru/api/v1'
const authURL = `${URL}/auth`
const regURL = `${URL}/user`

export const registration = async (data) => await axios.post(regURL, data)

export const authorization = async (data) => await axios.post(authURL, data)

export const setCookie = (name, value, options = {}) => {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  console.log(updatedCookie)
  document.cookie = updatedCookie;
}
