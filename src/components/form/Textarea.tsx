import { FC } from "react";
import { TextareaAutosize } from '@mui/base';
import styled from "@emotion/styled";
import { IInput, TextareaT } from "./types";
import { Colors, font } from "@/helpers";

const Textarea: FC<IInput & TextareaT> = ({
  variant = "primary-grey",
  register,
  rows = 4,
  ...rest
}) => {
  return (
    <StyledTextarea
      className={variant}
      minRows={rows}
      {...register}
      {...rest}
    />
  );
};

export default Textarea;

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  height: 100px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: ${Colors.white_color};
  resize: none;

  &,
  &::placeholder {
    ${font("14px", "150%", "400")};
    color: ${Colors.text_color};
  }

  &::before,
  &::after {
    display: none;
  }

  &.primary-grey {
    border-color: ${Colors.medium_grey};
  }

  &.secondary-grey {
    border-color: ${Colors.medium_grey};
    background-color: ${Colors.medium_grey_2};
  }

  &.primary-green {
    border-color: ${Colors.bright_green};
  }

  &.secondary-green {
    border-color: ${Colors.bright_green};
  }

  &.error {
    border-color: ${Colors.red_color};

    &::placeholder {
      color: ${Colors.red_color};
    }
  }
`;
