import Link from "next/link";
import styled from "@emotion/styled";
import { FC } from "react";
import { IAllCharacteristics } from "../components/types";
import { Flex, List } from "@/components";
import { Colors, font } from "@/helpers";
import { CharacteristicGroup } from "../components/ui";
import { characteristics } from "@/data";

const AllCharacteristics: FC<IAllCharacteristics> = ({ id }) => {
  return (
    <StyledFlex direction="column" align="flex-start" gap={40}>
      <Title>Характеристики</Title>
      <StyledFlex direction="column" align="flex-start" gap={40}>
        <List array={characteristics} Component={CharacteristicGroup} />
        <StyledLink href="#">Показать еще</StyledLink>
      </StyledFlex>
    </StyledFlex>
  );
};

export default AllCharacteristics;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const Title = styled.h4`
  ${font("24px", "150%", "700")}
`;

const StyledLink = styled(Link)`
  ${font("14px", "120%", "600")}
  text-decoration: underline;
  color: ${Colors.dark_grey};
`;
