import { CategoryT } from '@/helpers/type'
import { ReactNode } from 'react'

export interface IPage {
  children: ReactNode
}

export interface ILocationSelect {
  value?: string
}

export interface ImenuItem {
  id: number
  icon: string
  text: string
  url: string
}

export interface ImenuItemContentLink {
  id: number
  url: string
  text: string
}

export interface ImenuItemContent {
  id: number
  categoryId: number
  links: ImenuItemContentLink[]
}

export interface IHoverMenuWrapper {
  active?: boolean
}
