import { CategoryT } from '@/helpers/type'
import { useState } from 'react'
import { debounce } from 'lodash'
import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useActiveMenuItem = (menuItemsList: CategoryT[]) => {
  const { categories } = useTypedSelector((state) => state.categories)
  console.log(categories, 'useActiveMenuItem')

  const [activeMenuItem, setActiveMenuItem] = useState<CategoryT>(categories[0])

  const changeActiveMenuItem = debounce((category: CategoryT) => {
    setActiveMenuItem(category)
    console.log('menu')
  }, 150)

  return { activeMenuItem, changeActiveMenuItem }
}
