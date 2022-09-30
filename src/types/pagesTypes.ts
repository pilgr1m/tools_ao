export type pageType = {
  name: string,
  subPagesDatabase?: string[]
}

export type subPagesType = {
  label: string,
  url: string
}

export type subPagesItemsType = {
  name: string,
  subPages: subPagesType[]
}
