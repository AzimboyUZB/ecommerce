import OrderDeleteIcon from '@/assets/icons/OrderDeleteIcon'
import { Colors, Shadows, formatCurrency } from '@/helpers'
import { sumAllPrice } from '@/helpers/sumAllPrice'
import { useCart } from '@/hooks'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'

const OrderList = () => {
  const { cart, remove } = useCart()
  const router = useRouter()
  return (
    <OrderListRow>
      <OrderListRowTitle>
        <OrderListTitle>Состав заказа</OrderListTitle>
        <OrderListEditBtn onClick={() => router.push({ pathname: '/cart' })}>
          Изменить
        </OrderListEditBtn>
      </OrderListRowTitle>
      {cart.items.map((item) => (
        <OrderListProducts key={item.id}>
          <OrderListProduct>
            <OrderListProductName>{item.name_uz}</OrderListProductName>
            <OrderListDeleteBtn onClick={() => remove(item.id)}>
              <OrderDeleteIcon />
            </OrderListDeleteBtn>
            <OrderListProductQuantity>{item.quantity}</OrderListProductQuantity>
          </OrderListProduct>
          <OrderListProductPrice>
            {formatCurrency(item.quantity ? item.price * item.quantity : 0)}
          </OrderListProductPrice>
        </OrderListProducts>
      ))}
      <OrderListTotal>
        <OrderListTotalText>Всего</OrderListTotalText>
        <OrderListTotalPrice>
          {formatCurrency(sumAllPrice(cart.items))}
        </OrderListTotalPrice>
      </OrderListTotal>
    </OrderListRow>
  )
}

export default OrderList

const OrderListRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 70px 35px 30px;
  border-radius: 10px;
  background-color: ${Colors.white_color};
  margin: 30px 0;
  ${Shadows.shadow_1}
`
const OrderListRowTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
const OrderListTitle = styled.h6`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  color: ${Colors.dark_grey};
`
const OrderListEditBtn = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
  background-color: transparent;
  text-decoration-line: underline;
`
const OrderListProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`
const OrderListProduct = styled.div`
  display: flex;
  align-items: center;
`
const OrderListProductName = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.black_color};
  margin-right: 35px;
`
const OrderListDeleteBtn = styled.div`
  cursor: pointer;
  margin-right: 10px;
`
const OrderListProductQuantity = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.black_color};
`
const OrderListProductPrice = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
`
const OrderListTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
const OrderListTotalText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 152%;
  color: ${Colors.black_color};
`
const OrderListTotalPrice = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  color: ${Colors.dark_grey};
`
