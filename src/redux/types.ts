import { IProductScheme } from '@/components/cards/types'
import { BrandT, CategoryT, ProductT } from '@/helpers/type'

export interface Ilayout {
  hoverMenuIsOpen: boolean
}

export interface ICart {
  items: ProductT[]
}

export interface IProductCard {
  direction: 'column' | 'row'
}

export interface ILiked {
  color: any
}

export interface IProducts {
  products: ProductT[] | []
}

export interface IEvents {
  brands: BrandT[] | []
}

type ActionGenericT<T> = {
  type: string
  payload: T
}

export type SetProductsActionT = ActionGenericT<{
  products: ProductT[]
}>

export interface ICategorySlice {
  categories: CategoryT[] | []
}
