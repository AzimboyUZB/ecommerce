import React, { FC } from 'react'
import { IBrands } from './type'
import styled from '@emotion/styled'
import { BrandsResponseT, BrandT } from '@/helpers/type'

const BrandsCard: FC<BrandsResponseT> = ({ brands }) => {
  return (
    <BrandsCardStyle>
      <h3>{brands.name_uz}</h3>
      {/* <Img src={brands.image} /> */}
    </BrandsCardStyle>
  )
}

export default BrandsCard

const BrandsCardStyle = styled.div`
  width: 175px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 16px 3px #363a4514;
  @media screen and (max-width: 795px) {
    width: 30%;
  }
  @media screen and (max-width: 470px) {
    width: 45%;
  }
`

const Img = styled.img`
  object-fit: contain;
  width: auto;
  height: auto;
`
