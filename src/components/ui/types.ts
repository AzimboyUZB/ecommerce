import { DebouncedFunc } from 'lodash'
import React, { ComponentProps, FC, ReactNode } from 'react'
import { IProductScheme } from '../cards/types'
import { CategoryT, ProductT } from '@/helpers/type'

export interface IColorPalette {
  data: {
    name: string
    value: string
  }
}

export interface IList extends ComponentProps<'input'> {
  array: any[]
  Component: FC<any>
  sm?: boolean
}

export interface IFlex {
  direction?: 'unset' | 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'unset' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'center'
  justify?:
    | 'unset'
    | 'flex-start'
    | 'flex-end'
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
  gap?: number
  wrap?: 'unset' | 'wrap' | 'nowrap'
  children: ReactNode
  className?: string
}

export interface IStatistic {
  text: number | string
  icon: ReactNode
  onClick?: () => void
}

export interface ILikeIconWrapper {
  isActive?: boolean
}

export interface ISectionTitle {
  title?: string
  link?: {
    text?: string
    url?: string
  }
}

export interface IColorCircle {
  background: string
}

export interface IMenuLink {
  data: {
    id: number
    url: string
    text: string
    icon: string
  }
  onHover?: DebouncedFunc<any>
}

export interface IIcon {
  width?: number
  height?: number
}

export interface IImage {
  id: number
  src: string
  alt: string
}

export interface IThumbsGallery {
  images: string[]
  data?: ProductT
}

export interface ProductDetailButton {
  data: {
    id: number
    size: number
  }
}

export interface IProductDetail {
  title?: string
  children: ReactNode
}

export interface IProductCharacteristic {
  data: {
    key: string
    value: string
  }
}

export interface IBreadCrumb {
  text?: string
}

export interface IQuantity {
  increase: () => void
  decrease: () => void
  quantity: number
}

export interface IInputSelect {
  children: ReactNode
}

export interface IQuantityButton {
  quantity?: number
  id: number
}

export interface IProductSort {
  title?: string
}

export interface IMenuLik {
  data: CategoryT
  onHover: (data: CategoryT) => void
}
