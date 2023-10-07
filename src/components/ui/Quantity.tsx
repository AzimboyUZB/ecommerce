import styled from '@emotion/styled'
import { FC } from 'react'
import { IQuantity } from './types'

const Quantity: FC<IQuantity> = ({ increase, decrease, quantity }) => {
  return (
    <QuantityStyle>
      <QtyBtn onClick={decrease}>-</QtyBtn>
      <QtySpan>{quantity}</QtySpan>
      <QtyBtn onClick={increase}>+</QtyBtn>
    </QuantityStyle>
  )
}

export default Quantity

const QuantityStyle = styled.div`
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const QtyBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`

const QtySpan = styled.span`
  width: 40px;
  height: 30px;
  border: 2px solid #efefef;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
