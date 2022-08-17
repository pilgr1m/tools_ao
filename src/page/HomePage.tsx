import React, { FC } from 'react'

type Props = {

}

export const HomePage: FC<Props> = () => {
  const a = 1

  return (
    <div className="flex justify-center text-2xl text-orange-600">
      Hello, world! It is home page
    </div>
  )
}
