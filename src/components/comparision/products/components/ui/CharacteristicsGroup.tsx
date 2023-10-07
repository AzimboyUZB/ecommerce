import styled from "@emotion/styled";
import { FC } from "react";
import { ICharacteristicsGroup } from "./types";
import { Flex, List } from "@/components";
import { font } from "@/helpers";
import { Characteristic } from ".";

const CharacteristicsGroup: FC<ICharacteristicsGroup> = ({ data }) => {
  const { title, content } = data;

  return (
    <StyledFlex direction="column" align="flex-start" gap={20}>
      <Title>{title}</Title>
      <StyledFlex direction="column" align="flex-start">
        <List array={content} Component={Characteristic} />
      </StyledFlex>
    </StyledFlex>
  );
};

export default CharacteristicsGroup;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const Title = styled.h4`
  ${font("18px", "150%", "700")};
`;
