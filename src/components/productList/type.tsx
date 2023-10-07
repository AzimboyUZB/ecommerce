import { ProductT } from '@/helpers/type'

export interface IProductListFilterMedia {
  close: Boolean
  setClose: (a: boolean) => void
}

export type IconStyleT = {
  active: boolean
}

export interface IProductListItems {
  products: ProductT[]
}
