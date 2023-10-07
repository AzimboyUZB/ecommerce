import styled from "@emotion/styled";
import { FC } from "react";
import { IProductDetail } from "./types";
import { Flex } from "..";
import { font } from "@/helpers";

const ProductDetail: FC<IProductDetail> = ({ title, children }) => {
  return (
    <Flex direction="column" align="unset" gap={15}>
      {title ? <Title>{title}</Title> : null}
      {children}
    </Flex>
  );
};

export default ProductDetail;

const Title = styled.h1`
  ${font("14px", "120%", "600")}
`;
