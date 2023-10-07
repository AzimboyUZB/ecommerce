import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IFlex } from "./types";

export const Flex = styled.div<IFlex>`
  display: flex;

  ${({ direction, align, justify, gap, wrap }) =>
    css`
      flex-direction: ${direction};
      align-items: ${align ? align : "center"};
      justify-content: ${justify};
      gap: ${gap && `${gap}px`};
      flex-wrap: ${wrap ? wrap : "nowrap"};
    `}
`;
