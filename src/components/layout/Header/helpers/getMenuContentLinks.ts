import { ImenuItemContent } from "../../types";

export const getMenuContentLinks = (
  menuItemsContent: ImenuItemContent[],
  activeMenuItem: number
) => {
  const res = menuItemsContent.filter(
    (item) => item.categoryId === activeMenuItem
  )[0]?.links;

  return res ? res : [];
};
