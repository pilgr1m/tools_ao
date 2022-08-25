import { format } from 'fecha'

export const createPathIcon = (text: string) => `https://render.albiononline.com/v1/item/${text}`
export const generateDate = (time: string) => format(new Date(time), '[on] MM-DD-YYYY [at] HH:mm')

export const generateCapitalizeLabel = (label: string) => {
  const labelArr = label.split(' ')

  for (let i = 0; i < labelArr.length; i++) {
    labelArr[i] = labelArr[i][0].toUpperCase() + labelArr[i].substring(1)
  }

  const labelString = labelArr.join(' ')

  return labelString
}
