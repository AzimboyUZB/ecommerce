import styled from "@emotion/styled";
import { FC } from "react";
import { ProductDetailButton } from "./types";
import { Button } from "@mui/material";
import { Colors, Shadows } from "@/helpers";

const ProductDetailButton: FC<ProductDetailButton> = ({ data }) => {
  const { id, size } = data;

  return <StyledButton className={`id-${id}`}>{size}</StyledButton>;
};

export default ProductDetailButton;

const StyledButton = styled(Button)`
  padding: 12px 16px;
  border-radius: 10px;
  background: ${Colors.white_color};
  color: ${Colors.text_color};
  ${Shadows.shadow_white};
`;
