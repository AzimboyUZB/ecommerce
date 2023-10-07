import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FC } from "react";
import { IColorCircle, IColorPalette } from "./types";
import { Radio } from "@mui/material";
import { Colors } from "@/helpers";

const ColorPalette: FC<IColorPalette> = ({ data }) => {
  const { value, name } = data;

  return <Circle background={value} value={name} />;
};

export default ColorPalette;

const Circle = styled(Radio)<IColorCircle>`
  position: relative;
  width: 11px;
  height: 11px;
  border: none;
  border-radius: 50%;
  color: transparent !important;
  ${({ background }) =>
    css`
      background-color: ${background};

      &:hover {
        background-color: ${background};
      }
    `}

  &.Mui-checked {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 8px;
      border-bottom: 2px solid ${Colors.white_color};
      border-right: 2px solid ${Colors.white_color};
      transform: translate(-50%, -60%) rotate(45deg);
    }
  }
`;
