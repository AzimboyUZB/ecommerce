import { ProductT } from '@/helpers/type'
import { IImage } from '../ui/types'

export interface ICharacteristics {
  id: number
  key: string
  value: string
}

export interface IMemory {
  id: number
  type: string
  size: number
}

export interface IProductScheme {
  id: number
  title: string
  image: string
  images: IImage[]
  characteristics: ICharacteristics[]
  memories: IMemory[]
  category: string
  name: string
  colors: object[]
  defaultColor: string
  price: number
  rating: number
  comments: number
  quantity?: number
}

export interface IProduct {
  data: ProductT
  comparison?: boolean
}

export interface IProductList {
  image: string
  category: string
  name: string
  colors: object[]
  defaultColor: string
  price: number
  rating: number
  comments: number
}

export interface ICommentCard {
  data: {
    id?: number
    image: string
    userName: string
    rating: 1 | 2 | 3 | 4 | 5
    comment: string
    created: string
  }
}
