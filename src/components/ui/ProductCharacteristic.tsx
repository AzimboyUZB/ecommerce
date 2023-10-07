import styled from "@emotion/styled";
import { FC } from "react";
import { IProductCharacteristic } from "./types";
import { Colors, font } from "@/helpers";
import { Flex } from "..";

const ProductCharacteristic: FC<IProductCharacteristic> = ({ data }) => {
  const { key, value } = data;

  return (
    <Flex gap={5}>
      <Key>{key}</Key>
      <Value>{value}</Value>
    </Flex>
  );
};

export default ProductCharacteristic;

const Key = styled.h5`
  ${font("14px", "150%", "400")};
  color: ${Colors.text_color};

  &::after {
    content: ":";
  }
`;

const Value = styled.h4`
  ${font("14px", "150%", "400")};
  color: ${Colors.dark_grey};
`;
