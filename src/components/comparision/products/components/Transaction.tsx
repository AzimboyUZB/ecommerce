import Link from "next/link";
import styled from "@emotion/styled";
import { Button as MUButton } from "@mui/material";
import { FC } from "react";
import { Flex, Statistic } from "@/components";
import { Colors, Shadows, font, formatCurrency } from "@/helpers";
import { LikeIcon, ListIcon, ArrowRightIcon, CarIcon } from "@/assets/icons";
import { useCart } from "@/hooks";
import { IProduct } from "@/components/cards/types";
import { useFavouriteCart } from "@/hooks/useCart";

const Transaction: FC<IProduct> = ({ data }) => {
  const { id, price } = data;
  const { add, cart } = useCart();
  const { addFavouriteCart, favouriteCart } = useFavouriteCart();

  return (
    <StyledFlex direction="column" align="flex-start" gap={30}>
      <Wrapper>
        <Flex direction="column" align="flex-start" gap={20}>
          <Flex gap={10}>
            <Text>Цена</Text>
            <Price>{formatCurrency(price)}</Price>
          </Flex>
          <Flex gap={40}>
            <Link href="/comparison?characteristics=all">
              <Statistic text="Сравнить" icon={<ListIcon />} onClick={() => { }} />
            </Link>
            <Link href="/favourites">
              <Statistic
                text="В избранное"
                icon={
                  <LikeIcon
                    className={`favourites ${favouriteCart.items.some((item) => item.id === id) ? "active" : ""}`}
                  />
                }
                onClick={() => addFavouriteCart(data)}
              />
            </Link>
          </Flex>
          <Flex gap={20}>
            {cart.items.some((item) => item.id === id) ? (
              <Link href="/cart">
                <Button>перейти в корзину</Button>
              </Link>
            ) : (
              <Button onClick={() => add(data)}>Купить</Button>
            )}
            <Flex direction="column" gap={5} className="delivery">
              <CarIcon />
              <Text>Доставка</Text>
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
      <Button>
        <Flex gap={10}>
          Подробнее про доставку и оплату
          <ArrowRightIcon />
        </Flex>
      </Button>
    </StyledFlex>
  );
};

export default Transaction;

const StyledFlex = styled(Flex)`
  position: relative;
  @media screen and (max-width: 867px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 420px;
  height: 182px;
  padding: 25px;
  border-radius: 5px;
  ${Shadows.shadow_white};

  @media screen and (max-width: 867px) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 484px) {
    .delivery {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }

  @media screen and (max-width: 385px) {
    .delivery {
      position: relative;
      top: unset;
      right: unset;
    }
  }

  svg.favourites.active {
    path {
      fill: ${Colors.bright_green};
    }
  }
`;

const Text = styled.h4`
  ${font("16px", "152%", "500px")};
  color: ${Colors.text_color};
`;

const Price = styled.h3`
  ${font("24px", "150%", "700")}
  color: ${Colors.dark_grey};
`;

const Button = styled(MUButton)`
  ${font("13px", "120%", "500")};
  display: inline-block;
  padding: 12px 24px;
  background-color: ${Colors.bright_green} !important;
  color: ${Colors.white_color};
  border-radius: 10px;
  min-width: 280px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }

  @media screen and (max-width: 385px) {
    min-width: unset;
    max-width: 100%;
    width: 100%;
  }
`;
