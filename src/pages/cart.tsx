import { Container, Page, ProductCart2 } from '@/components'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Link from 'next/link'
import { useCart } from '@/hooks'
import { sumAllPrice } from '../helpers/sumAllPrice'
import { sumQuantity } from '@/helpers/sumQuantity'
import { useRouter } from 'next/router'

const Cart = () => {
  const { cart } = useCart()
  const router = useRouter()
  return (
    <Page>
      <Container>
        <Box>
          <Link href='/'>Главная страница /</Link> Корзина
        </Box>
        {cart.items.length ? (
          <CartSectionStyle>
            <ContentRow>
              {cart.items.map((item) => (
                <ProductCart2 key={item.id} data={item} />
              ))}
            </ContentRow>
            <InformRow>
              <Row>
                <H4>Товар :</H4>
                <H3>{sumQuantity(cart.items)}</H3>
              </Row>
              <Row>
                <H4>Скидки и бонусы</H4>
                <H3>0 ₽</H3>
              </Row>
              <Row>
                <H4>Всего</H4>
                <H2>{sumAllPrice(cart.items)} ₽</H2>
              </Row>
              <Row>
                <Link href="/checkout"
                >
                  <CheckoutBtn>
                  Перейти к оформлению
                  </CheckoutBtn>
                </Link>
              </Row>
            </InformRow>
          </CartSectionStyle>
        ) : (
          <Wrapper>
            <h2>Ваша корзина пусто для покупок.</h2>
            <CheckoutBtn onClick={() => router.push({ pathname: '/' })}>
              Вернуться домой
            </CheckoutBtn>
          </Wrapper>
        )}
      </Container>
    </Page>
  )
}

export default Cart

const CartSectionStyle = styled.div`
  width: 100%;
  padding: 0 10px 10px 0;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 825px) {
    flex-direction: column;
  }
`

const ContentRow = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1050px) {
    width: 550px;
  }

  @media screen and (max-width: 920px) {
    width: 480px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const InformRow = styled.div`
  width: 315px;
  height: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 1px 2px 16px 3px #363a4514;
  border-radius: 10px; 

  @media screen and (max-width: 920px) {
    width: 280px;
    height: 240px;
  }

  @media screen and (max-width: 825px) {
    width: 100%;
    height: 200px;
  }
`

const CheckoutBtn = styled.div`
  padding: 5px 10px;
  width: 300px;
  height: 35px;
  cursor: pointer;
  background-color: #00c65e;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media screen and (max-width: 920px) {
    width: 250px;
    height: 30px;
  }
  @media screen and (max-width: 790px) {
    width: 240px;
    height: 30px;
    font-size: 12px;
  }
`

const Row = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H4 = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
`
const H3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  @media screen and (max-width: 554px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  @media screen and (max-width: 554px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
  }
`
