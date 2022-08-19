export type runeByItemType = {
  value: number,
  label: string,
}

export type pricesType = {
  name: string,
  id: string,
  label: string,
  premium?: boolean,
  data?: runeByItemType[],
}

export type itemsType = {
  'buy_price_max': number,
  'buy_price_max_date': string,
  'buy_price_min': number,
  'buy_price_min_date': string,
  'city': string,
  'item_id': string,
  'quality': number,
  'sell_price_max': number,
  'sell_price_max_date': string,
  'sell_price_min': number,
  'sell_price_min_date': string,
}
