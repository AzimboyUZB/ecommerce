import styled from '@emotion/styled'
import { FC } from 'react'
import { Flex } from '@/components'
import { font } from '@/helpers'
import { IProduct } from '@/components/cards/types'
import { MainCharacteristics, ProductThumbGallery, Transaction } from '.'

const MainDetails: FC<IProduct> = ({ data }) => {
  const { id, images, name_uz, attributes, category } = data

  console.log(data.images)

  return (
    <Wrapper>
      <Title>
        {name_uz} ({category?.name_uz})
      </Title>
      <StyledMainFlex align='flex-start' justify='space-between' gap={40}>
        <ThumbWrapper>
          <ProductThumbGallery images={images} data={data} />
        </ThumbWrapper>
        <StyledFlex align='flex-start' gap={40}>
          {/* <MainCharacteristics
            data={{ id, memories, colors, defaultColor, characteristics }}
          /> */}
          <Transaction data={data} />
        </StyledFlex>
      </StyledMainFlex>
    </Wrapper>
  )
}

export default MainDetails

const Wrapper = styled.div`
  width: 100%;
`

const StyledMainFlex = styled(Flex)`
  @media screen and (max-width: 867px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 867px) {
    width: 100%;
    flex-direction: column;
  }
`

const Title = styled.h1`
  ${font('24px', '150%', '700')};
  margin-bottom: 30px;

  @media screen and (max-width: 910px) {
    font-size: 18px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
  }
`

const ThumbWrapper = styled.div`
  width: 370px;

  @media screen and (max-width: 867px) {
    max-width: 560px;
    width: 100%;
  }
`
