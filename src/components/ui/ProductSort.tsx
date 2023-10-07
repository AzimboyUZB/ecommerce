import styled from "@emotion/styled";
import { FC } from "react";
import { IProductSort } from "./types";
import { Flex } from "./Flex";
import { Colors, font } from "@/helpers";
import { MenuItem, Select, css } from "@mui/material";
import { IProductCard } from "@/redux/types";
import { setDirection } from "@/redux/slices/cardDirectionSlice";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { RowSelectorIcon, TableSelectorIcon } from "@/assets/icons";

const ProductSort: FC<IProductSort> = ({ title }) => {
  const { direction } = useTypedSelector((state) => state.cardDirection);
  const dispatch = useTypedDispatch();
  const switchCardDirection = (direction: IProductCard) => {
    dispatch(setDirection(direction));
  };

  return (
    <Flex justify={title ? "space-between" : "unset"} gap={15} wrap="wrap">
      {title ? <Title>{title}</Title> : null}
      <ProductListFilterRow>
        <ProductListBtn>
          <ProductListBtnTable
            onClick={() => switchCardDirection({ direction: "column" })}
          >
            <TableSelectorIcon
              className={direction === "column" ? "active" : ""}
            />
          </ProductListBtnTable>
          <ProductListBtnRow
            onClick={() => switchCardDirection({ direction: "row" })}
          >
            <RowSelectorIcon className={direction === "row" ? "active" : ""} />
          </ProductListBtnRow>
        </ProductListBtn>
      </ProductListFilterRow>
    </Flex>
  );
};

export default ProductSort;

const Title = styled.h1`
  ${font("24px", "150%", "700")};
`;

const ProductListFilterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProductListText = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 120%;
  color: ${Colors.medium_grey};
`;

const ProductListSelector = styled(Select)`
  border: none;
  margin: 0 10px;
  div {
    padding: 8px 14px;
  }
`;

const ProductListBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  .active {
    path {
      fill: ${Colors.bright_green};
    }
  }
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
