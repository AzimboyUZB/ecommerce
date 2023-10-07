import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Container } from '@/components'
import { IconFilters, IconMenu, IconSearch, Logo, User } from '@/assets/icons'
import LocationsSelect from './LocationsSelect'
import Link from 'next/link'

const HeaderTop: FC = (props) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Nav>
            <Link href="/">
              <Logo />
            </Link>
          </Nav>
          <ButtonsWrapper>
            <LocationsSelect />
            <Link href="/login"><Button><User /> Вход/ регистрация</Button></Link>
          </ButtonsWrapper>
        </Row>
        <RowTwo>
          <IconMenu />
          <Input placeholder='Поиск по объявлением' />
          <IconFilters />
        </RowTwo>
      </Container>
    </Wrapper>
  )
}

export default HeaderTop

const Wrapper = styled.div`
  height: 50px;
`

const Row = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

const Nav = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: none;
`

const RowTwo = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 901px){
    display: none;
  }
`

const Input = styled.input`
  width: 90%;
  height: 30px;
  background-color: #f7f8fa;
  border: 1px solid #f7f8fa;
  border-radius: 10px;
  padding: 0 10px;
`