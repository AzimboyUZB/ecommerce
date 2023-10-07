import styled from "@emotion/styled";
import { FC } from "react";
import { ILikeIconWrapper, IThumbsGallery } from "@/components/ui/types";
import { LikeIcon } from "@/assets/icons";
import { ThumbGallery } from "@/components";
import { Colors } from "@/helpers";
import { css } from "@emotion/react";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { IProductScheme } from "@/components/cards/types";

const ProductThumbGallery: FC<IThumbsGallery> = ({
  images,
  data = {} as IProductScheme,
}) => {
  const { id } = data;
  const favouriteCart = useTypedSelector((state) => state.favouriteCart);

  return (
    <Wrapper>
      <LikeIconWrapper
        isActive={favouriteCart.items.some((item) => item.id === id)}
      >
        <LikeIcon />
      </LikeIconWrapper>
      <ThumbGallery images={images} />
    </Wrapper>
  );
};

export default ProductThumbGallery;

const Wrapper = styled.div`
  position: relative;
`;

const LikeIconWrapper = styled.div<ILikeIconWrapper>`
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 2;

  svg {
    cursor: pointer;
    path {
      stroke: ${Colors.bright_green};
    }
    ${({ isActive }) =>
      css`
        fill: ${isActive ? Colors.bright_green : "none"};
      `}
  }
`;
