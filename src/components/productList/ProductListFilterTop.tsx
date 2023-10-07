import React, { useState } from "react";
import FilterIcon from "@/assets/icons/FilterIcon";
import RowSelectorIcon from "@/assets/icons/RowSelectorIcon";
import TableSelectorIcon from "@/assets/icons/TableSelectorIcon";
import { Colors } from "@/helpers";
import styled from "@emotion/styled";
import ProductListFilterMedia from "./ProductListFilterMedia";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { setDirection } from "@/redux/slices/cardDirectionSlice";
import { IProductCard } from "@/redux/types";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const ProductListFilterTop = () => {
  const { direction } = useTypedSelector((state) => state.cardDirection);
  const dispatch = useTypedDispatch();
  const switchCardDirection = (direction: IProductCard) => {
    dispatch(setDirection(direction));
  };

  const [filter, setFilter] = useState(false);
  return (
    <ProductListFilter>
      {filter ? (
        <ProductListFilterMedia close={filter} setClose={setFilter} />
      ) : null}
      <ProductListFilterRow>
        <ProductListBtn>
          <ProductListBtnTable
            onClick={() => switchCardDirection({ direction: "column" })}
          >
            <TableSelectorImg active={direction === "column"} />
          </ProductListBtnTable>
          <ProductListBtnRow
            onClick={() => switchCardDirection({ direction: "row" })}
          >
            <RowSelectorImg active={direction === "row"} />
          </ProductListBtnRow>
          <FilterMediaIcon onClick={() => setFilter(true)}>
            <FilterIcon />
          </FilterMediaIcon>
        </ProductListBtn>
      </ProductListFilterRow>
    </ProductListFilter>
  );
};

export default ProductListFilterTop;

const ProductListFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductListFilterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TableSelectorImg = styled(TableSelectorIcon) <{ active: boolean }>`
  & path {
    fill: ${({ active }) => (active ? Colors.bright_green : "#DADCDC")};
  }
`;
const RowSelectorImg = styled(RowSelectorIcon) <{ active: boolean }>`
  & path {
    stroke: ${({ active }) => (active ? Colors.bright_green : "#DADCDC")};
  }
`;
const ProductListBtn = styled.div`
  display: flex;
  gap: 10px;
`;

const ProductListBtnTable = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const ProductListBtnRow = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const FilterMediaIcon = styled.button`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;
