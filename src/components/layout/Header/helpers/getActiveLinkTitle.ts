import { CategoryT } from '@/helpers/type'

export const getActiveLinkTitle = (
  menuItemsList: CategoryT[] | [],
  activeMenuItem: number
) => {
  return menuItemsList.filter((item) => item.id === activeMenuItem)[0]?.name_uz
}
