import Link from "next/link";
import * as MU from "@mui/material";
import styled from "@emotion/styled";
import { FC } from "react";
import { css } from "@emotion/react";
import {
    CartIcon,
    DeleteIcon,
    LikeIcon,
    StarIcon,
} from "@/assets/icons";
import { Flex, Quantity } from "..";
import { Colors, Shadows, font, formatCurrency } from "@/helpers";
import { IProduct } from "./types";
import { useLiked, useCart } from "@/hooks";
import { useFavouriteCart } from "@/hooks/useCart";
import { ILikeIconWrapper } from "../ui/types";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const FavouriteProductCardTwo: FC<IProduct> = ({ data, comparison }) => {
    const { id, image, name_uz, price } = data;
    const favouriteCart = useTypedSelector((state) => state.favouriteCart);
    const { isLiked, toggleLiked } = useLiked(
        favouriteCart.items.some((item) => item.id === id)
    );
    const { add, cart, increase, decrease, remove } = useCart()
    const { toggleFavouriteCart } = useFavouriteCart();
    const quantity = cart.items.filter((item) => item.id === id)[0]?.quantity


    return (
        <Wrapper>
            <LikeIconWrapper
                isActive={isLiked}
                onClick={() => {
                    toggleFavouriteCart(data);
                    toggleLiked();
                }}
            >
                <LikeIcon />
            </LikeIconWrapper>
            <Link href={`/products/${id}?accessories=all`}>
                <CardMedia image={image} />
            </Link>
            <CardContent>
                <Span color={Colors.medium_grey}></Span>
                <Title>{name_uz}</Title>
            </CardContent>
            <CardActions>
                <Price>{formatCurrency(price)}</Price>
                <Flex gap={20}>
                    {cart.items.some((item) => item.id === id) && quantity ? (
                        <Quantity
                            quantity={quantity}
                            increase={() => increase(id)}
                            decrease={() => (quantity !== 1 ? decrease(id) : remove(id))}
                        />
                    ) : (
                        <Button
                            variant='outlined'
                            endIcon={<CartIcon />}
                            onClick={() => add(data)}
                        >
                            <Span color={Colors.dark_grey}>Купить</Span>
                        </Button>
                    )}
                    {comparison ? <DeleteIcon className="delete-icon" /> : null}
                </Flex>
            </CardActions>
        </Wrapper>
    );
};

export default FavouriteProductCardTwo;

const Wrapper = styled(MU.Card)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    position: relative;
    height: 180px;
    padding-inline: 20px;
    border-radius: 8px;
    box-shadow: none;
    gap: 40px;
    ${Shadows.shadow_white};

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 400px;
        align-items: center;
        text-align: center;
        gap: 0;
    }
`;

const LikeIconWrapper = styled.div<ILikeIconWrapper>`
  position: absolute;
  top: 15px;
  left: 170px;

  svg {
    cursor: pointer;
    path {
      stroke: ${Colors.bright_green};
    }
    ${({ isActive }) =>
        css`
        fill: ${Colors.bright_green};
      `}
  }

    @media screen and (max-width: 768px){
        left: 0;
        right: -150px;    
    }
`;

const CardMedia = styled(MU.CardMedia)`
    width: 166px;
    height: 166px;
    margin-block: 10px;
    background-size: contain;
`;

const CardContent = styled(MU.CardContent)`
    width: 200px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;

    .colors {
        margin-top: 10px;
        margin-bottom: 30px;
    }
`;

const Title = styled.h2`
  ${font("20px", "152%", "600")}
  color: ${Colors.dark_grey};
`;

const Span = styled.span<{ color: string }>`
  ${font("13px", "140%", "600")}
  ${({ color }) =>
        css`
      color: ${color};
    `}
`;

const Price = styled.h5`
    width: 180px; 
    ${font("18px", "150%", "700")}
    color: ${Colors.bright_green};
    text-align: center;
`;

const CardActions = styled(MU.CardActions)`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    flex: 1 1 auto;
    padding: 20px 0;

    @media screen and (max-width: 768px){
        align-items: center;
    }
`;

const Button = styled(MU.Button)`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease;

  ${Shadows.shadow_1};

  span,
  path {
    transition: all 0.2s ease;
  }

  &:hover {
    border: none;
    background-color: ${Colors.bright_green};
    color: ${Colors.white_color};

    span {
      color: ${Colors.white_color};

      path {
        stroke: ${Colors.white_color};
        fill: ${Colors.white_color};
      }
    }
  }

  @media screen and (min-width: 510px) {
    width: 174px;
  }
`;
