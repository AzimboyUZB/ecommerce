import { IProduct } from "../cards/types";

export interface IProductsList {
  products: IProduct[];
}

export interface IColorsList {
  colors: object[];
  defaultColor: string;
}
