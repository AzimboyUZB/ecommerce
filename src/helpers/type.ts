export type ColorsT = {
  red_color: string
  white_color: string
  text_color: string
  light_grey: string
  medium_grey: string
  medium_grey_2: string
  dark_grey: string
  bright_green: string
  light_orange: string
  bright_orange: string
  light_green: string
  black_color: string
}

export type ShadowsT = {
  shadow_1: string
  shadow_white: string
}

import { AppProps } from 'next/app'
import { EmotionCache } from '@emotion/react'
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export interface IFlex {
  direction?: string
  align?: string
  justify?: string
  gap?: number
}

export interface ISectionTitle {
  title: string
  link: {
    text?: string
    url: string
  }
}

export type ProductT = {
  id: number
  name_uz: string
  name_ru: string
  category: CategoryT
  previous_price: string
  attributes: string
  description_uz: string
  descriptionRu: string
  price: number
  discount: number
  images: string[]
  image: string
  position: string
  views: number
  isFeatured: boolean
  brand_id: number
  slug: string
  quantity?: number
}

export type CategoryT = {
  id: number
  name_uz: string
  name_ru: string
  image: string
  slug: string
  parent_id: number
  position: string | null
  priority: number
  is_featured: number
  status: number
  views: number
  children: CategoryT[]
}

export type BrandT = {
  id: number
  title_uz: string
  title_ru: string
  slug: string
  url: string
  image: string
  position: string
}

export type ProductsResponseT = {
  products: ProductT[]
  relatedCategories: CategoryT[]
  pagination: any
}

export type EventsReponseT = {
  events: BrandT[]
}

export type CategoriesResponseT = {
  categories: CategoryT[]
}

export type BrandsResponseT = {
  brands: any
}
