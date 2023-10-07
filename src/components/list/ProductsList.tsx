import Carousel from '../ui/Carousel'
import { FC } from 'react'
import { ProductCard } from '..'
import { IProductsList } from './type'

const ProductsList: FC<IProductsList> = ({ products, sm = false }) => {
  return <Carousel array={products} Component={ProductCard} sm={sm} />
}

export default ProductsList
