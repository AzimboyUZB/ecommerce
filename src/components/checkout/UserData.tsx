import { Colors, Shadows } from '@/helpers';
import styled from '@emotion/styled';
import React from 'react'

const UserData = () => {
  const userData = [
    {
      id: 1,
      title: "Имя",
      placeholder: "Петр"
    },
    {
      id: 2,
      title: "Фамилия",
      placeholder: "Иванов"
    },
    {
      id: 3,
      title: "Телефон",
      placeholder: "+ 7 (123)-456-78-90"
    },
    {
      id: 4,
      title: "E- mail",
      placeholder: "name@inbox.ru"
    },
  ]
  return (
    <UserDataRow>
      <UserDataTitle>Данные получателя</UserDataTitle>
      <UserDataForm>
        {
          userData.map((item) => (
            <UserDataItem key={item.id}>
              <UserDataLabel>{item.title}</UserDataLabel>
              <UserDataInput type="text" placeholder={item.placeholder} />
            </UserDataItem>
          ))
        }
      </UserDataForm>
    </UserDataRow>
  )
}

export default UserData;

const UserDataRow = styled.div`
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
const UserDataTitle = styled.h3`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: ${Colors.dark_grey};
  margin-bottom: 20px;
`
const UserDataForm = styled.div`
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`
const UserDataItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const UserDataLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
  color: ${Colors.dark_grey};
`
const UserDataInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  padding: 10px 15px;
  border-radius: 10px;
  color: ${Colors.dark_grey};
  border: 1px solid ${Colors.medium_grey};
  background: ${Colors.white_color};
  &::placeholder {
    color: ${Colors.medium_grey};
  }
`