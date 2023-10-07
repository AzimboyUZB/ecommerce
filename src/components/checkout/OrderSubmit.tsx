import { Colors } from '@/helpers';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react'

const OrderSubmit = () => {
  return (
    <OrderSubmitRow>
      <OrderSubmitBtn variant='contained'>Оформить заказ</OrderSubmitBtn>
      <OrderSubmitText>Нажимая кнопку оформить вы подтверждаете свое согласие с условиями продажи в интернет-магазине Dily</OrderSubmitText>
    </OrderSubmitRow>
  )
}

export default OrderSubmit;

const OrderSubmitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
`
const OrderSubmitBtn = styled(Button)`
  color: ${Colors.white_color};
`
const OrderSubmitText = styled.span`
  width: 376px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
`