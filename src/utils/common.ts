import { format } from 'fecha'

export const createPathIcon = (text: string) => `https://render.albiononline.com/v1/item/${text}`
export const generateDate = (time: string) => format(new Date(time), '[on] MM-DD-YYYY [at] HH:mm')
