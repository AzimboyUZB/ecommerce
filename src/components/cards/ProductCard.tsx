import Link from 'next/link'
import * as MU from '@mui/material'
import styled from '@emotion/styled'
import { FC } from 'react'
import { css } from '@emotion/react'
import { CartIcon, LikeIcon } from '@/assets/icons'
import { Flex, Quantity } from '..'
import { ILikeIconWrapper } from '../ui/types'
import { Colors, Shadows, font, formatCurrency } from '@/helpers'
import { IProduct } from './types'
import { useCart, useLiked, useTranslate } from '@/hooks'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useFavouriteCart } from '@/hooks/useCart'

const ProductCard: FC<IProduct> = ({ data }) => {
  const { id, image, price, slug, category } = data
  const { add, cart, increase, decrease, remove } = useCart()
  const favouriteCart = useTypedSelector((state) => state.favouriteCart)
  const { toggleFavouriteCart } = useFavouriteCart()
  const { toggleLiked } = useLiked(
    favouriteCart.items.some((item) => item.id === id)
  )
  const { translate } = useTranslate()
  const quantity = cart.items.filter((item) => item.id === id)[0]?.quantity

  return (
    <Wrapper>
      <LikeIconWrapper
        isActive={favouriteCart.items.some((item) => item.id === id)}
        onClick={() => {
          toggleFavouriteCart(data)
          toggleLiked()
        }}
      >
        <LikeIcon />
      </LikeIconWrapper>
      <Link href={`/products/${slug}?accessories=all`}>
        <CardMedia image={image} />
      </Link>
      <CardContent>
        <Span color={Colors.medium_grey}>{category.name_uz}</Span>
        <Title>{translate(data, 'name')}</Title>
        <Flex direction='column' align='flex-start' gap={5}>
          <Price>{formatCurrency(price)}</Price>
        </Flex>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Wrapper>
  )
}

export default ProductCard

const Wrapper = styled(MU.Card)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  height: 350px;
  padding-inline: 20px;
  border-radius: 8px;
  ${Shadows.shadow_1};
`

const LikeIconWrapper = styled.div<ILikeIconWrapper>`
  position: absolute;
  top: 15px;
  right: 20px;

  svg {
    cursor: pointer;
    path {
      stroke: ${Colors.bright_green};
    }
    ${({ isActive }) =>
      css`
        fill: ${isActive ? Colors.bright_green : 'none'};
      `}
  }
`

const CardMedia = styled(MU.CardMedia)`
  width: auto;
  height: 166px;
  margin-block: 10px;
  background-size: contain;
`

const CardContent = styled(MU.CardContent)`
  padding: 0;

  .colors {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const Title = styled.h2`
  ${font('16px', '152%', '600')}
  color: ${Colors.dark_grey};
`

const Span = styled.span<{ color: string }>`
  ${font('12px', '140%', '600')}
  ${({ color }) =>
    css`
      color: ${color};
    `}
`

const Price = styled.h5`
  ${font('18px', '150%', '700')}
  color: ${Colors.bright_green};
`

const CardActions = styled(MU.CardActions)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1 1 auto;
`

const Button = styled(MU.Button)`
  width: 100%;
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
`
