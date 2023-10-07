import { FC } from "react";
import styled from "@emotion/styled";
import { Colors } from "@/helpers/colors";
import { Container } from "@/components";
import {
  IconMenu,
  IconSearch,
  LocalShippingIcon,
  CloseIcon,
  IconMenuTwo,
  FavoriteBorderIcon,
  IconBasket,
  User,
} from "@/assets/icons";
import Link from "next/link";
import { useHoverMenu } from "../hooks";
import { useCart } from "@/hooks";
import { sumQuantity } from '@/helpers/sumQuantity'


const HeaderMain: FC = () => {
  const { hoverMenuIsOpen, toggleMenu } = useHoverMenu();
  const { cart } = useCart();

  return (
    <Wrapper>
      <Container>
        <Nav>
          <Row2>
            <ToggleMenu onClick={toggleMenu}>
              <CloseIcon className={hoverMenuIsOpen ? "active" : ""} />
              <IconMenu className={!hoverMenuIsOpen ? "active" : ""} />
            </ToggleMenu>
            <Link href="/cart">
              <List>
                <H4>Что мы покупаем</H4>
              </List>
            </Link>
            <Link href="/cart">
              <List>
                <LocalShippingIcon />
                Доставка и оплата
              </List>
            </Link>
          </Row2>
          <Box>
            <BoxInput>
              <IconSearch />
              <Input placeholder="Я хочу купить" />
              <BtnInput>Найти</BtnInput>
            </BoxInput>
            <Row>
              <Link href="/comparison?characteristics=all">
                <IconMenuTwo />
              </Link>
              <Link href="/favourites">
                <FavoriteBorderIcon />
              </Link>
              <Link href="/cart">
                <BoxBasket>
                  <IconBasket />
                  {cart.items.length > 0 ? (<P>{sumQuantity(cart.items)}</P>) : null}
                </BoxBasket>
              </Link>
              <ButtonsWrapper>
                <Link href="/login"><Button><User /> Вход/ регистрация</Button></Link>
              </ButtonsWrapper>
            </Row>
          </Box>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default HeaderMain;

const Wrapper = styled.div`
  height: 50px;
  background-color: ${Colors.light_grey};
  border: 1px solid #dadcdc;
  border-left: 0;
  border-right: 0;
  font-family: sans-serif;

  @media screen and (max-width: 900px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 10;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 900px) {
    width: 100vw;
    justify-content: space-around;
  }
`;

const Row2 = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const BoxBasket = styled.div`
  position: relative;
`

const P = styled.p`
  position: absolute;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  bottom: 13px;
  left: 10px;
`;

const Box = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const BoxInput = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const BtnInput = styled.button`
  width: 50px;
  height: 30px;
  background-color: #dadcdc;
  border-radius: 0px 30px 30px 0;
  border: none;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  padding: 0 10px;
  border: none;
  outline-style: none;
`;
const List = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const H4 = styled.h4`
  color: #00c65e;
`;

const ToggleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    transform: scale(0);

    &.active {
      transform: scale(1);
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 901px) {
    display: none;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: none;

  @media screen and (max-width: 375px) {
    flex-direction: column; 
    gap: 0;
  }
`