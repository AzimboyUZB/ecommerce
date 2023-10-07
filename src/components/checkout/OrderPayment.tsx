import { Colors, Shadows } from '@/helpers';
import styled from '@emotion/styled';
import React from 'react'

const OrderPayment = () => {
  const boxItem = [
    {
      id: 1,
      title: "Онлайн",
      desc: "Картами Visa, Mastercard, МИР"
    },
    {
      id: 2,
      title: "Рассрочка онлайн",
      desc: "Список банков партнеров заполнить анкету на сайте"
    },
    {
      id: 3,
      title: "При получении",
      desc: "Наличными или картой "
    },
    {
      id: 4,
      title: "Электронными деньгами",
      desc: "ЮMoney, QIWI Wallet"
    }
  ]
  return (
    <OrderPaymentRow>
      <OrderPaymentTitle>Способ оплаты</OrderPaymentTitle>
      <OrderPaymentBoxes>
        {
          boxItem.map((item) => (
            <OrderPaymentBoxItem key={item.id}>
              <OrderPaymentCheckbox>
                <OrderPaymentCheckboxDot id={item.title} type="radio"/>
                <OrderPaymentItemLabel htmlFor={item.title}>{item.title}</OrderPaymentItemLabel>
              </OrderPaymentCheckbox>
              <OrderPaymentDesc>{item.desc}</OrderPaymentDesc>
            </OrderPaymentBoxItem>
          ))
        }
      </OrderPaymentBoxes>
    </OrderPaymentRow>
  )
}

export default OrderPayment;

const OrderPaymentRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 70px 41px 30px;
  border-radius: 10px;
  background-color: ${Colors.white_color};
  margin: 30px 0;
  ${Shadows.shadow_1}
`
const OrderPaymentTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  color: ${Colors.dark_grey};
  margin-bottom: 20px;
`
const OrderPaymentBoxes = styled.div`
  width: 100%;
  display: grid;
  gap: 30px;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
`
const OrderPaymentBoxItem = styled.div`
  display: flex;
  padding: 12px 15px;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid ${Colors.medium_grey};
  background: ${Colors.white_color};
`
const OrderPaymentCheckbox = styled.div`
  display: flex;
  gap: 20px;
`
const OrderPaymentCheckboxDot = styled.input`
  accent-color: ${Colors.bright_green};
`
const OrderPaymentItemLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: ${Colors.black_color};
`
const OrderPaymentDesc = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  color: ${Colors.black_color};
  margin-bottom: 15px;
`