import * as MU from '@mui/material'
import styled from '@emotion/styled'
import { FC } from 'react'
import { css } from '@emotion/react'
import {
  CartIcon,
  CommentIcon,
  DeleteIcon,
  LikeIcon,
  StarIcon,
} from '@/assets/icons'
import { Statistic, Flex, ColorsList, Quantity } from '..'
import { ILikeIconWrapper } from '../ui/types'
import { Colors, Shadows, font, formatCurrency } from '@/helpers'
import { IProduct } from './types'
import { useCart } from '@/hooks'
import { IColorsList } from '../list/types'

const ProductCardRow: FC<IProduct> = ({ data, comparison }) => {
  const { id, image, name_uz, price, views, description_uz } = data
  const { add, increase, decrease, remove, cart } = useCart()
  const quantity = cart.items.filter((item) => item.id === id)[0]?.quantity

  return (
    <Wrapper>
      <LikeIconWrapper>
        <LikeIcon />
      </LikeIconWrapper>
      <CardMedia image={image} />
      <CardContent>
        <Title>{name_uz}</Title>
        <Span color={Colors.medium_grey}>{description_uz}</Span>
      </CardContent>
      <Flex direction='column' justify='space-around'>
        <CardActions>
          <Flex justify='space-between' direction='column' gap={10}>
            <Price>{formatCurrency(price)}</Price>
            <Flex gap={10} direction={'row'}>
              <Statistic text={String(quantity)} icon={<StarIcon />} />
              <Statistic text={views} icon={<CommentIcon />} />
            </Flex>
          </Flex>
        </CardActions>
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
          {comparison ? <DeleteIcon className='delete-icon' /> : null}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default ProductCardRow

const Wrapper = styled(MU.Grid)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  position: relative;
  padding-inline: 20px;
  border-radius: 8px;
  ${Shadows.shadow_1};
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`

const LikeIconWrapper = styled.div<ILikeIconWrapper>`
  position: absolute;
  top: 15px;
  left: 172px;
  @media screen and (max-width: 650px) {
    left: 370px;
  }

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
  width: 170px;
  height: 166px;
  margin-block: 10px;
  background-size: contain;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

const CardContent = styled(MU.CardContent)`
  flex: 0.5 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 650px) {
    padding: 16px 16px 0 16px;
  }

  .colors {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`

const Title = styled.h2`
  ${font('16px', '152%', '600')}
  color: ${Colors.dark_grey};
  margin-top: 5px;
`

const Span = styled.span<{ color: string }>`
  ${font('12px', '140%', '600')}
  ${({ color }) =>
    css`
      color: ${color};
    `}
`
const ColorList = styled((props: IColorsList) => <ColorsList {...props} />)`
  display: flex;
  justify-content: end;
`

const Price = styled.h5`
  ${font('18px', '150%', '700')}
  color: ${Colors.bright_green};
`

const CardActions = styled(MU.CardActions)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 650px) {
    padding: 16px 16px 0 16px;
  }
`

const Button = styled(MU.Button)`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease;
  ${Shadows.shadow_1};
  @media screen and (max-width: 650px) {
    width: 100%;
  }

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
