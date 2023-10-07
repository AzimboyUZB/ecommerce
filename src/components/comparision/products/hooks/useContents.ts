import {
  Accessories,
  AllCharacteristics,
  Credit,
  Delivery,
  Description,
  Reviews,
} from '../sections'
import { IContents } from './types'
import { ProductT } from '@/helpers/type'

export const useContents = (product: ProductT) => {
  const { id } = product

  const contents: IContents[] = [
    {
      Component: AllCharacteristics,
      props: { id },
    },
    {
      Component: Accessories,
      props: {},
    },
    {
      Component: Reviews,
      props: {},
    },
    {
      Component: Credit,
      props: {},
    },
    {
      Component: Delivery,
      props: {},
    },
    {
      Component: Description,
      props: {},
    },
  ]

  return { contents }
}
