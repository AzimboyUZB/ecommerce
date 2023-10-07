import styled from "@emotion/styled";
import ProductCard from "../cards/ProductCard";
import { Pagination } from "@mui/material";
import { Colors } from "@/helpers";
import { Flex, List } from "@/components";
import ProductCardRow from "../cards/ProductCardColumn";
import { useSelector } from "react-redux";
import { RootStateT } from "@/redux/store";
import { IProductCard } from "@/redux/types";
import { FC } from "react";
import { IProductListItems } from "./type";

const ProductListItems: FC<IProductListItems> = ({products}) => {
  const { direction }: IProductCard = useSelector(
    (state: RootStateT) => state.cardDirection
  );
  return (
    <>
      <Flex wrap="wrap" justify="space-between" gap={20}>
        <List
          array={products}
          Component={direction === "row" ? ProductCardRow : ProductCard}
        />
      </Flex>
      <PaginationList count={150} color="primary" />
    </>
  );
};

export default ProductListItems;

const PaginationList = styled(Pagination)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  & ul {
    & li {
      & button.Mui-selected {
        color: ${Colors.white_color};
      }
    }
  }
`;
