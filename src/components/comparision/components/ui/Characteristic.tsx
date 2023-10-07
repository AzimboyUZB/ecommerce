import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
import { Colors, font } from "@/helpers";
import { Flex } from "@/components";
import { ICharacteristic } from "./types";

const Characteristic: FC<ICharacteristic> = ({ firstData, secondData }) => {
  const renderIf = (content: ReactNode) => {
    return firstData.key === secondData.key ? content : "None";
  };

  return (
    <StyledFlex align="flex-start" gap={20} wrap="wrap">
      <Text className="key">{renderIf(firstData.key || secondData.key)}</Text>
      <ContentWrapper gap={50}>
        <Text>{renderIf(firstData.value)}</Text>
        <Text>{renderIf(secondData.value)}</Text>
      </ContentWrapper>
    </StyledFlex>
  );
};

export default Characteristic;

const StyledFlex = styled(Flex)`
  width: 100%;
  border-bottom: 1px solid ${Colors.medium_grey};
  padding-block: 10px;

  &:first-of-type {
    border-top: 1px solid ${Colors.medium_grey};
  }

  @media screen and (max-width: 575px) {
    gap: 10px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Text = styled.h4<{ full?: boolean }>`
  position: relative;
  ${font("14px", "150%", "500")};
  max-width: 250px;
  width: 100%;

  &.key {
    font-weight: 600;

    @media screen and (max-width: 500px) {
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 1px;
        width: 100%;
        border-radius: 10px;
        background-color: ${Colors.text_color};
      }
    }
  }

  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`;

const ContentWrapper = styled(Flex)`
  flex: 1 1 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
