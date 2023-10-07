import styled from '@emotion/styled'
import { FC } from 'react'
import {
  Page,
  Container,
  BreadCrumb,
  Flex,
  ProductSort,
  FavouriteProductCard,
  ProductCardRow,
} from '@/components'
import { Shadows } from '@/helpers'
import { characteristics, products } from '@/data'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ProductT } from '@/helpers/type'
import { FilterButtons } from '@/components/comparision/components'
import { CharacteristicsGroup } from '@/components/comparision/components/ui'

const Comparison: FC = () => {
  let product: ProductT = {
    id: 1,
    name_uz: '',
    name_ru: '',
    previous_price: '',
    attributes: '',
    description_uz: '',
    descriptionRu: '',
    price: 1,
    discount: 1,
    images: [],
    image: '',
    position: '',
    views: 1,
    isFeatured: false,
    brand_id: 1,
    slug: '',
    quantity: 1,
    category: {
      id: 0,
      name_uz: '',
      name_ru: '',
      image: '',
      slug: '',
      parent_id: 0,
      position: null,
      priority: 0,
      is_featured: 0,
      status: 0,
      views: 0,
      children: [],
    },
  }
  const { direction } = useTypedSelector((state) => state.cardDirection)
  const firstProductCharacteristics = characteristics
  const secondProductCharacteristics = characteristics

  const collapse = () => {
    const result = []

    for (let i = 0; i < firstProductCharacteristics.length; i++) {
      result.push({
        first: firstProductCharacteristics[i],
        second: secondProductCharacteristics[i],
      })
    }

    return result
  }

  return (
    <Page>
      <Container>
        <ShadowContainer>
          <Flex direction='column' align='unset' gap={40}>
            <ProductSort title='Сравнение' />
            {false ? null : (
              <ProductCardsWrapper
                direction={direction === 'row' ? 'column' : 'row'}
                align={direction === 'row' ? 'unset' : 'center'}
                justify={direction === 'row' ? 'unset' : 'center'}
                gap={direction === 'row' ? 20 : 70}
              >
                {direction === 'row' ? (
                  <ProductCardRow data={product} comparison />
                ) : (
                  <FavouriteProductCard data={product} comparison />
                )}
              </ProductCardsWrapper>
            )}
            <FilterButtons />
            {collapse().map((item, index) => (
              <CharacteristicsGroup
                key={index}
                firstData={item.first}
                secondData={item.second}
              />
            ))}
          </Flex>
        </ShadowContainer>
      </Container>
    </Page>
  )
}

export default Comparison

const ShadowContainer = styled(Container)`
  ${Shadows.shadow_white};
  padding-inline: 50px;
  padding-top: 30px;
  padding-bottom: 80px;

  .delete-icon {
    cursor: pointer;
  }

  @media screen and (max-width: 715px) {
    padding-inline: 20px;
  }

  @media screen and (max-width: 500px) {
    padding-inline: 0;
    box-shadow: none;
  }
`

const ProductCardsWrapper = styled(Flex)`
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`
