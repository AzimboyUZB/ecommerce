import { FC } from 'react'
import { css } from '@emotion/react'
import { IProduct } from './types'
import styled from '@emotion/styled'
import Quantity from '../ui/Quantity'
import { ILikeIconWrapper } from '../ui/types'
import { formatCurrency, Colors } from '@/helpers'
import InformBtnIcon from '@/assets/icons/InformBtnIcon'
import { useCart, useLiked, useTranslate } from '@/hooks'
import { LikeIcon } from '@/assets/icons'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useFavouriteCart } from '@/hooks/useCart'

const ProductCart2: FC<IProduct> = ({ data }) => {
  const { image, price, id } = data
  const { remove, increase, decrease, cart } = useCart()
  const { translate } = useTranslate()
  const handleIncrease = () => increase(id)
  const handleDecrease = () => decrease(id)
  const favouriteCart = useTypedSelector((state) => state.favouriteCart)
  const { isLiked, toggleLiked } = useLiked(
    favouriteCart.items.some((item) => item.id === id)
  )
  const quantity = cart.items.filter((item) => item.id === id)[0]?.quantity
  const { toggleFavouriteCart } = useFavouriteCart()
  return (
    <ProductCart>
      <Boxx>
        <ProductImage>
          <Image src={image} alt='' />
          <LikeIconWrapper
            isActive={isLiked}
            onClick={() => {
              toggleFavouriteCart(data)
              toggleLiked()
            }}
          >
            <LikeIcon />
          </LikeIconWrapper>
        </ProductImage>
        <Row>
          <Title>{translate(data, 'name')}</Title>
        </Row>
      </Boxx>
      <Box>
        <Quantity
          increase={handleIncrease}
          decrease={handleDecrease}
          quantity={Number(quantity)}
        />
        <ProductPrice>
          <H2>{formatCurrency(price)}</H2>
        </ProductPrice>

        <DeleteBtn onClick={() => remove(id)}>
          <InformBtnIcon />
        </DeleteBtn>
      </Box>
    </ProductCart>
  )
}

export default ProductCart2

const LikeIconWrapper = styled.div<ILikeIconWrapper>`
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

const ProductCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (max-width: 554px) {
    justify-content: space-around;
    padding: 20px;
  }
`
const ProductImage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
  height: 100px;
  gap: 5px;

  @media screen and (max-width: 1050px) {
    width: 60px;
    height: 80px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 40px 0 12px;

  @media screen and (max-width: 1050px) {
    margin: 0 30px 0 10px;
  }

  @media screen and (max-width: 554px) {
    margin: 0;
  }
`

const ProductPrice = styled.div`
  margin: 0 40px;

  @media screen and (max-width: 1050px) {
    margin: 0 30px;
  }

  @media screen and (max-width: 554px) {
    margin: 0;
  }
`

const H2 = styled.h2`
  @media screen and (max-width: 1050px) {
    font-size: 20px;
  }
  @media screen and (max-width: 554px) {
    font-size: 16px;
  }
`

const Box = styled.div`
  display: flex;

  @media screen and (max-width: 554px) {
    flex-direction: column-reverse;
  }
`

const Boxx = styled.div`
  display: flex;

  @media screen and (max-width: 554px) {
    flex-direction: column;
  }
`

const Title = styled.h4``

const DeleteBtn = styled.button`
  padding: 5px;
  border: none;
`
