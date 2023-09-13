import axios from 'axios'
import qs from 'qs'
import { deleteObjectEmptyValues, isObjectEmpty } from '~ondemand/utilities/objects'

export const getCSRFToken = () => document.getElementsByTagName('meta')['csrf-token']?.content

const getDateFilter = (date = {}) => {
  if (isObjectEmpty(date)) return {}

  return {
    start_date: date.from,
    end_date: date.to
  }
}

const formatParams = params => {
  const { page = 1, perPage, filter = {}, sort } = params
  const { date, ...otherFilters } = filter

  return deleteObjectEmptyValues({
    page,
    per_page: perPage,
    ...otherFilters,
    ...getDateFilter(date)
  })
}

export const buildRequest = params => {
  const parsedParams = []
  const stringifyConfig = { encode: false, arrayFormat: 'brackets' }
  parsedParams.push(
    qs.stringify(formatParams(params), stringifyConfig)
  )

  return parsedParams.join('&')
}


const axiosInstance = axios.create({
  paramsSerializer: buildRequest,
  baseURL: 'https://api.mercadolibre.com/'
})


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location.reload()
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
