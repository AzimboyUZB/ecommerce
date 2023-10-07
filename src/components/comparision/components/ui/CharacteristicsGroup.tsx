import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { ICharacteristicsGroup } from "./types";
import { Flex } from "@/components";
import { font } from "@/helpers";
import { Characteristic } from ".";

const CharacteristicsGroup: FC<ICharacteristicsGroup> = ({
  firstData,
  secondData,
}) => {
  const renderIf = (content: ReactNode) => {
    return firstData.title === secondData.title ? content : "None";
  };

  const collapse = () => {
    const result = [];

    for (let i = 0; i < firstData.content.length; i++) {
      result.push({
        first: firstData.content[i],
        second: secondData.content[i],
      });
    }

    return result;
  };

  return (
    <StyledFlex direction="column" align="flex-start" gap={20}>
      <Title>{renderIf(firstData.title || secondData.title)}</Title>
      {collapse().map((item, index) => (
        <Characteristic
          key={index}
          firstData={item.first}
          secondData={item.second}
        />
      ))}
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
