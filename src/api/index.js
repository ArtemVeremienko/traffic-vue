import axios from 'axios'

const URL = 'https://seo-kit.ru/api/v1'

export const post = async ({ path, data }) => await axios.post(`${URL}/${path}`, data);

export const getUser = async (id) => await axios.get(`${URL}/user/${id}`)

export const getTraffic = async () => await axios.get(`${URL}/SearchVisit?resource_id=1&start_date=2020-10-01&end_date=2020-10-20&group_by=type`)
