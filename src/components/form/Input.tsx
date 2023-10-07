import * as MU from "@mui/material";
import styled from "@emotion/styled";
import { FC } from "react";
import { IInput, InputT } from "./types";
import { Colors, font } from "@/helpers";

const Input: FC<IInput & InputT> = ({
  variant = "primary-grey",
  register,
  ...rest
}) => {
  return <StyledInput className={variant} {...register} {...rest} />;
};

export default Input;

const StyledInput = styled(MU.Input)`
  width: 100%;
  height: 400px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: ${Colors.white_color};

  &,
  input::placeholder {
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

    input::placeholder {
      color: ${Colors.red_color};
    }
  }
`;
