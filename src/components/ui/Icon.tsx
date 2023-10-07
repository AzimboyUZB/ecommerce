import styled from "@emotion/styled";
import { IIcon } from "./types";
import { css } from "@emotion/react";

const Icon = styled.div<IIcon>`
  position: relative;
  object-fit: contain;
  ${({ width, height }) =>
    css`
      width: ${width ? `${width}px` : "20px"};
      height: ${height ? `${height}px` : "20px"};
    `}
`;

export default Icon;
