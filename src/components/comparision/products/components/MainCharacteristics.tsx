import Link from "next/link";
import styled from "@emotion/styled";
import { FC } from "react";
import {
  ColorsList,
  Flex,
  List,
  ProductCharacteristic,
  ProductDetail,
  ProductDetailButton,
} from "@/components";
import { IMainCharacteristics } from "./types";
import { Colors, font } from "@/helpers";

const MainCharacteristics: FC<IMainCharacteristics> = ({ data }) => {
  const { id, memories, colors, defaultColor, characteristics } = data;

  return (
    <StyledFlex direction="column" align="flex-start" gap={30}>
      <ProductDetail title="Объем памяти">
        <Flex gap={15}>
          <List array={memories} Component={ProductDetailButton} />
        </Flex>
      </ProductDetail>
      <ProductDetail title="Цвет">
        <ColorsList colors={colors} defaultColor={defaultColor} />
      </ProductDetail>
      <ProductDetail title="Характеристики">
        <Flex direction="column" align="flex-start" gap={10}>
          <List array={characteristics} Component={ProductCharacteristic} />
          <StyledLink href="#characteristics">Все характеристики</StyledLink>
        </Flex>
      </ProductDetail>
    </StyledFlex>
  );
};

export default MainCharacteristics;

const StyledFlex = styled(Flex)`
  flex: 1 1 auto;
  flex-wrap: wrap;
  height: 100%;

  @media screen and (max-width: 1150px) {
    flex-direction: row;
  }

  @media screen and (max-width: 867px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  ${font("14px", "150%", "500")};
  text-decoration: underline;
  color: ${Colors.dark_grey};
`;
