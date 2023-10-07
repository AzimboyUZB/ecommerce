import { IconArrow, RowSelectorIcon, TableSelectorIcon } from '@/assets/icons'
import { Page, FavouriteProductCard, } from '@/components'
import styled from '@emotion/styled'
import { Shadows } from '@/helpers';
import Link from 'next/link';
import { useFavouriteCart } from '@/hooks/useCart'
import { MenuItem, Select } from "@mui/material";
import { Colors } from "@/helpers";
import { setDirection } from "@/redux/slices/cardDirectionSlice";
import { IProductCard } from "@/redux/types";
import { useTypedDispatch } from "@/hooks/useTypedDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useState } from 'react';
import FavouriteProductCardTwo from '@/components/cards/FavouriteProductCardTwo';

const Favourites = () => {
  const { favouriteCart } = useFavouriteCart()
  const { direction } = useTypedSelector((state) => state.cardDirection);
  const dispatch = useTypedDispatch();
  const switchCardDirection = (direction: IProductCard) => {
    dispatch(setDirection(direction));
  };

  const [menu, setMenu] = useState(true)

  const handleMenuOne = () => {
    setMenu(true)
    console.log("one")
  }

  const handleMenuTwo = () => {
    setMenu(false)
    console.log("two")
  }

  return (
    <Page>
      <Wrapper>
        <Title>
          <Link href="/">Главная страница</Link>
          <IconArrow />
          <Link href="">Избранное</Link>
        </Title>
        <Container>
          <Name>
            <H1>Избранное</H1>
            <Row>
              <ProductListBtnRow onClick={() => switchCardDirection({ direction: "row" })}>
                <Button onClick={handleMenuOne}>
                  <RowSelectorImg active={direction === "row"} />
                </Button>
              </ProductListBtnRow>
              <ProductListBtnTable onClick={() => switchCardDirection({ direction: "column" })}>
                <Button onClick={handleMenuTwo}>
                  <TableSelectorImg active={direction === "column"} />
                </Button>
              </ProductListBtnTable>
            </Row>
          </Name>
          {menu ? (
            <BoxCard>
              {favouriteCart.items.length ? (favouriteCart.items.map((item) => (
                <Card key={item.id}>
                  <FavouriteProductCard key={item.id} data={item} />
                </Card>
              ))) : (<h2>У вас нет избранных товаров.</h2>)
              }
            </BoxCard>
          ) : (
            <BoxCard>
              {favouriteCart.items.length ? (favouriteCart.items.map((item) => (
                <CardTwo key={item.id}>
                  <FavouriteProductCardTwo key={item.id} data={item} />
                </CardTwo>
              ))) : (
              <h2>У вас нет избранных товаров.</h2>
              )}
            </BoxCard>
          )}

        </Container>
      </Wrapper>
    </Page >
  )
}

export default Favourites

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-family: sans-serif;
`

const Title = styled.div`
  width: 90%;
  max-width: 1170px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and ( max-width: 375px){
    font-size: 12px;
  }
`

const Container = styled.div`
  width: 90%;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  ${Shadows.shadow_white};
  padding: 30px 50px;
  margin-bottom: 30px;

  @media screen and ( max-width: 375px){
    padding: 20px 0;
  }
`

const Name = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media screen and ( max-width: 586px){
    height: 60px;
    flex-direction: column;
    justify-content: center;
  }
`

const H1 = styled.h1`
  @media screen and ( max-width: 920px){
    font-size: 20px;
  }
`

const Row = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

const H3 = styled.h3`
  font-size: 15px;

`

const ProductListSelector = styled(Select)`
  border: none;
  margin: 0 10px;
  div {
    padding: 8px 14px;
  }
`;

const BoxCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 586px) {
    justify-content: center;
  }
`

const Card = styled.div`

`

const CardTwo = styled.div`
  width: 100%;
`

const TableSelectorImg = styled(TableSelectorIcon) <{ active: boolean }>`
  & path {
    fill: ${({ active }) => (active ? Colors.bright_green : "#DADCDC")};
  }
`;

const RowSelectorImg = styled(RowSelectorIcon) <{ active: boolean }>`
  & path {
    stroke: ${({ active }) => (active ? Colors.bright_green : "#DADCDC")};
  }
`;

const ProductListBtnTable = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const ProductListBtnRow = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const Button = styled.div``