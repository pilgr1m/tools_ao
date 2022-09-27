import axios from 'axios'

const baseURL = 'https://www.albion-online-data.com/api/v2'
const axiosOptions = {
  baseURL,
  timeout: 1000,
  headers: { contentType: 'application/json' },
}

export const instance = axios.create(axiosOptions)

// TODO added loader
export const useHttp = () => {
  const request = async (url: string) => {
    try {
      const response = await instance.get(url)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return { request }
}
