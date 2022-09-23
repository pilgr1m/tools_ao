import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'https://www.albion-online-data.com/api/v2'

const axiosOptions = {
  baseURL,
  timeout: 1000,
  headers: { contentType: 'application/json' },
}
const instance = axios.create(axiosOptions)

export const useFetch = (url:string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        // loader on
        const response = await instance.get(url)

        // if status OK(200) loader off
        console.log(response.data)
        setData(response.data)
      } catch (err: any) {
        setError(err)
        // if is error - loader on
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  return { data, loading, error }
}
