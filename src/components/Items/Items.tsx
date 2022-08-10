import React, { FC, useEffect, useState } from 'react'

type Props = {

}

export const Items: FC<Props> = () => {
  const [data, setData] = useState(null)

  const baseUrl = 'https://www.albion-online-data.com/api/v2'
  const url2 = 'https://www.albion-online-data.com/api/v2/stats/history/T4_BAG@3'

  const fetchFuncData = async () => {
    try {
      // const response = await fetch('https://gameinfo.albiononline.com/api/gameinfo/search?q=PiLiGRiMiCH',
      const response = await fetch(url2)

      const dataResponse = await response.json()

      console.log('response: ', response)
      console.log('dataResponse: ', dataResponse)
    } catch (e) {
      console.log('error CATCH block')
    }
  }

  // const fetchFunc2 = () => {
  //   fetch(url)
  //     .then(response => {
  //       console.log(response)
  //
  //       return response.json()
  //     }).then((data) => {
  //       console.log(data)
  //     })
  // }

  useEffect(() => {
    console.log('useEFffectd')
    // fetchFunc()
    fetchFuncData()
    // setData(response)
  }, [])

  return (
    <div className="flex justify-center text-3xl font-bold text-gray-700">
      Some page...
      <img src="https://render.albiononline.com/v1/item/T4_OFF_SHIELD@1.png" alt="icon" />
    </div>
  )
}
