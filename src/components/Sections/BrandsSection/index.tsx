import styled from '@emotion/styled'
import BrandsCard from './BrandsCard'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { FC } from 'react'
import { BrandsResponseT } from '@/helpers/type'

const BrandsSection = () => {
  const { brands } = useTypedSelector((state) => state.brands)
  return (
    <BrandSectionStyle>
      {brands.map((item: any) => (
        <BrandsCard key={item.id} brands={item} />
      ))}
    </BrandSectionStyle>
  )
}

export default BrandsSection

const BrandSectionStyle = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
`
