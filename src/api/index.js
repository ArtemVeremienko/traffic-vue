import axios from 'axios'

const URL = 'https://seo-kit.ru/api/v1'
const authURL = `${URL}/auth`
const regURL = `${URL}/user`

export const post = async ({ path, data }) => await axios.post(`${URL}/${path}`, data);

export const getUser = async (id) => await axios.get(`${URL}/user/${id}`)

export const registration = async (data) => await axios.post(regURL, data)

export const authorization = async (data) => await axios.post(authURL, data)
