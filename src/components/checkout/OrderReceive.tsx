import { Colors, Shadows } from '@/helpers'
import styled from '@emotion/styled'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import InputSelect from '../ui/InputSelect'

const OrderReceive = () => {
  const inputData = [
    {
      id: 1,
      title: "Дата",
      items: [
        {
          id: 1,
          item: "30 июня",
        },
        {
          id: 2,
          item: "31 июня",
        },
        {
          id: 3,
          item: "32 июня",
        },
      ]
    },
    {
      id: 2,
      title: "Время",
      items: [
        {
          id: 1,
          item: "30 июня",
        },
        {
          id: 2,
          item: "31 июня",
        },
        {
          id: 3,
          item: "32 июня",
        },
      ]
    },
    {
      id: 3,
      title: "Улица/корпус/дом",
      items: [
        {
          id: 1,
          item: "30 июня",
        },
        {
          id: 2,
          item: "31 июня",
        },
        {
          id: 3,
          item: "32 июня",
        },
      ]
    },
    {
      id: 4,
      title: "Квартира",
      items: [
        {
          id: 1,
          item: "30 июня",
        },
        {
          id: 2,
          item: "31 июня",
        },
        {
          id: 3,
          item: "32 июня",
        },
      ]
    },
  ]
  return (
    <OrderReceiveRow>
      <OrderReceiveTitle>Способ получения в Москве</OrderReceiveTitle>
      <OrderReceiveTypes>
        <OrderReceiveTypeDelivery variant='contained'>Доставка</OrderReceiveTypeDelivery>
        <OrderReceiveTypeDelivery variant='outlined'>Самовывоз</OrderReceiveTypeDelivery>
      </OrderReceiveTypes>
      <OrderReceivePlaceForm>
        <OrderReceivePlace>
          <OrderReceivePlaceTitle>Город доставки</OrderReceivePlaceTitle>
          <InputSelect>
            <MenuItem value="1">Москва</MenuItem>
            <MenuItem value="2">Питер</MenuItem>
            <MenuItem value="3">Санкт-Петербург</MenuItem>
          </InputSelect>
        </OrderReceivePlace>
        <OrderReceiveDetails>
          {
            inputData.map((item) => (
              <OrderReceiveDate key={item.id}>
                <OrderReceiveDateForm>
                  <OrderReceiveDateTitle>{item.title}</OrderReceiveDateTitle>
                  <InputSelect>
                    {
                      item.items.map((item) => (
                        <MenuItem value={item.id} key={item.id}>{item.item}</MenuItem>
                      ))
                    }
                  </InputSelect>
                </OrderReceiveDateForm>
              </OrderReceiveDate>
            ))
          }
        </OrderReceiveDetails>
        <OrderReceiveComment>
          <OrderReceiveCommentTitle>
            Комментарий курьеру
          </OrderReceiveCommentTitle>
          <OrderReceiveCommentInput type="text" />
        </OrderReceiveComment>
      </OrderReceivePlaceForm>
    </OrderReceiveRow>
  )
}

export default OrderReceive

const OrderReceiveRow = styled.div`
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
const OrderReceiveTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0px;
  color: ${Colors.dark_grey};
  margin-bottom: 20px;
`
const OrderReceiveTypes = styled.div`
  display: flex;
  gap: 20px;

`
const OrderReceiveTypeDelivery = styled(Button)`
  &:first-of-type {
    color: ${Colors.white_color};
  }
`
const OrderReceivePlaceForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 30px 30px;
  gap: 30px;
  border-radius: 10px;
  background-color: ${Colors.white_color};
  margin: 30px 0;
  ${Shadows.shadow_1}
`
const OrderReceivePlace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const OrderReceivePlaceTitle = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 152%;
  color: ${Colors.black_color};
  margin-bottom: 15px;
`
const OrderReceiveDetails = styled.div`
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`
const OrderReceiveDate = styled.div``
const OrderReceiveDateForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const OrderReceiveDateTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 152%;
  color: ${Colors.black_color};
  margin-bottom: 15px;
`
const OrderReceiveComment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const OrderReceiveCommentTitle = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 152%;
  color: ${Colors.black_color};
`
const OrderReceiveCommentInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid ${Colors.medium_grey};
  background: ${Colors.white_color};
`