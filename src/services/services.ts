import { useCallback } from 'react'
import axios from 'axios'

const baseURL = 'https://www.albion-online-data.com/api/v2'

const axiosOptions = {
  baseURL,
  timeout: 1000,
  headers: { contentType: 'application/json' },
}

const instance = axios.create(axiosOptions)

// TODO added loader
export const useHttp = () => {
  // const request = useCallback(async (url: string, isLoader?: boolean) => {
  const request = async (url: string, isLoader?: boolean) => {
    try {
      // loader on
      const response = await instance.get(url)

      // if status OK(200) loader off
      console.log(response)
      console.log(response.data)
      // setState(response.data)
    } catch (error) {
      // if is error - loader on
      console.error(error)
    }
  }

  return { request }
}
