import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {

}

export const Page404: FC<Props> = () => {
  const a = 1

  return (
    <div className="flex justify-center text-2xl text-red-600">
      <span> Sorry, page not found... </span>
      <span> you can go to
        <Link to="/" className="text-2xl text-blue-600"> Home page</Link>
      </span>
    </div>
  )
}
