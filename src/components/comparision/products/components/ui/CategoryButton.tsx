import styled from "@emotion/styled";
import { FC } from "react";
import { ICategoryButton } from "./types";
import { Button, css } from "@mui/material";
import { Colors, Shadows, font } from "@/helpers";
import { useRouter } from "next/router";

const CategoryButton: FC<ICategoryButton> = ({ data }) => {
  const router = useRouter();
  const { accessories } = router.query;
  const { text, url } = data;

  const changeQuery = () => {
    router.push({ query: { ...router.query, accessories: url } });
  };

  return (
    <StyledButton active={accessories === url} onClick={changeQuery}>
      {text}
    </StyledButton>
  );
};

export default CategoryButton;

const StyledButton = styled(Button)<{ active: boolean }>`
  ${font("12px", "140%", "500")};
  text-transform: capitalize;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: ${Colors.white_color} !important;
  color: ${Colors.text_color};
  ${Shadows.shadow_white};

  ${({ active }) =>
    active &&
    css`
      background-color: ${Colors.bright_green} !important;
      color: ${Colors.white_color};
    `}
`;
