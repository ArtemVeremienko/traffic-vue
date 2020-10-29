import axios from 'axios'

const URL = 'https://seo-kit.ru/api/v1'

export const post = async ({ path, data }) => await axios.post(`${URL}/${path}`, data);

export const getUser = async (id) => await axios.get(`${URL}/user/${id}`)

export const getTraffic = async (id = 1) => await axios.get(`${URL}/SearchVisit?resource_id=${id}&start_date=2020-10-01&end_date=2020-10-31&group_by=type`)
