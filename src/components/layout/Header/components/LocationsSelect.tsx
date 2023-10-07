import React, { ElementType, FC } from 'react'
import { ILocationSelect } from '../../types'
import styled from '@emotion/styled'
import { IconSearch, LocationIcon } from '@/assets/icons'
import { useState } from 'react'
import { Button } from '@mui/material'

const LocationsSelect: FC<ILocationSelect> = () => {
  const [modal, setModal] = useState(false)

  const options = [
    {
      id: 1,
      value: 'Москва',
      label: 'Москва',
      title: 'Москва',
    },
    {
      id: 2,
      value: 'Москва',
      label: 'Москва',
      title: 'Москва',
    },
    {
      id: 3,
      value: 'Москва',
      label: 'Москва',
      title: 'Москва',
    },
    {
      id: 4,
      value: 'Москва',
      label: 'Москва',
      title: 'Москва',
    },
    {
      id: 5,
      value: 'Москва',
      label: 'Москва',
      title: 'Москва',
    },
    {
      id: 6,
      value: 'Москва',
      label: 'Москва',
      title: 'Москва',
    },
  ]

  const handleOpen = () => {
    setModal(true)
  }

  const handleClose = () => {
    setModal(false)
  }
  return (
    <>
      <BtnLocation>
        <Row onClick={handleOpen}>
          <LocationIcon />
          <H1>Москва</H1>
        </Row>
      </BtnLocation>
      <Modal className={modal ? 'modal open' : 'modal'}>
        <Box>
          <BoxInput>
            <IconSearch />
            <Input placeholder='Поиск по городам' />
          </BoxInput>
          <Button onClick={handleClose} variant='outlined' color='error'>
            x
          </Button>
        </Box>
        <H1>Введите город поиска или выберите из списка ниже</H1>
        <Title>
          {options.map((item) => (
            <BoxList key={item.id}>
              <Btn onClick={handleClose}>{item.value}</Btn>
              <Btn onClick={handleClose}>{item.label}</Btn>
              <Btn onClick={handleClose}>{item.title}</Btn>
            </BoxList>
          ))}
        </Title>
      </Modal>
    </>
  )
}

export default LocationsSelect

const BtnLocation = styled.button`
  border: none;
`

const Row = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
  border: 1px solid gray;
  border-radius: 8px;
`

const H1 = styled.h1`
  font-size: 13px;
  font-family: sans-serif;
`

const Modal = styled.div`
  position: fixed;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
  z-index: 10;
`

const Box = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BoxInput = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 0 8px 8px 0;
  border: none;
`

const Title = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BoxList = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
`

const Btn = styled.button`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  border-radius: 8px;
  padding: 0 10px;
  border: none;

  :hover {
    background-color: #00b7ff53;
  }
`
