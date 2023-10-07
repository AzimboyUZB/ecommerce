import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FC } from "react";
import { Colors, font } from "@/helpers";
import { Flex } from "@/components";
import { ICharacteristic } from "./types";

const Characteristic: FC<ICharacteristic> = ({ data }) => {
  const { key, value } = data;

  return (
    <StyledFlex align="flex-start" gap={50}>
      <Text>{key}</Text>
      <Text full>{value}</Text>
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
`;

const Text = styled.h4<{ full?: boolean }>`
  ${font("14px", "150%", "500")};
  max-width: 250px;
  width: 100%;

  ${({ full }) =>
    full &&
    css`
      max-width: 340px;
    `}

  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`;
