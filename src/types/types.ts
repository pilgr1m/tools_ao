export type runeByItemType = {
  value: number,
  label: string
}

export type pricesType = {
  name: string
  id: string
  label: string
  premium?: boolean
  data?: runeByItemType[],
}
