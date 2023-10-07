import DropUpIcon from '@/assets/icons/DropUpIcon'
import DropdownIcon from '@/assets/icons/DropdownIcon'
import { productListFilter } from '@/data/productListFilter'
import { Colors } from '@/helpers'
import styled from '@emotion/styled'
import { Button, Input, Slider } from '@mui/material'
import React, { FC, useState } from 'react'
import { IProductListFilterMedia } from './type'

const ProductListFilterMedia: FC<IProductListFilterMedia> = ({
  close,
  setClose,
}) => {
  // const [close, setClose] = useState(true)
  const [active, setActive] = useState(false)
  const [value, setValue] = React.useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }
  const handleDropdown = () => {
    setActive(!active)
  }
  return (
    <ProductListFilter>
      <ProductListFilterRow>
        <ProductListFilterBack>
          <ProductListFilterBackBtn onClick={() => setClose(!close)}>&larr;</ProductListFilterBackBtn>
          <ProductListFilterBackText>
            &nbsp; Фильтры
          </ProductListFilterBackText>
        </ProductListFilterBack>
        <ProductListFilterPrice>
          <ProductListFilterPriceTitle>Цена</ProductListFilterPriceTitle>
          <ProductListFilterPriceInput>
            <ProductListFilterInput
              type='number'
              placeholder='от'
            ></ProductListFilterInput>
            <ProductListFilterInput
              type='number'
              placeholder='до'
            ></ProductListFilterInput>
          </ProductListFilterPriceInput>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
          />
        </ProductListFilterPrice>
        {productListFilter.map((item) => (
          <ProductListFilterItems key={item.id}>
            <ProductListFilterItemFlex onClick={handleDropdown}>
              <ProductListFilterItemTitle>
                {item.title}
              </ProductListFilterItemTitle>
              {active ? <DropdownIcon /> : <DropUpIcon />}
            </ProductListFilterItemFlex>
            <ProductListFilterItemList className={active ? 'active' : ''}>
              {item.children.map((phone) => (
                <ProductListFilterPhoneModel key={phone.id}>
                  <ProductListRadio
                    name={phone.text}
                    id={phone.text}
                    type='checkbox'
                  />
                  <ProductListText htmlFor={phone.text}>
                    {phone.text}
                  </ProductListText>
                </ProductListFilterPhoneModel>
              ))}
              <ProductListFilterAllBtn>Показать еще</ProductListFilterAllBtn>
            </ProductListFilterItemList>
          </ProductListFilterItems>
        ))}
        <ProductListFilterSubmit>Применить</ProductListFilterSubmit>
        <ProductListFilterSubmit>Сбросить фильтры</ProductListFilterSubmit>
      </ProductListFilterRow>
    </ProductListFilter>
  )
}

export default ProductListFilterMedia

const ProductListFilter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.white_color};
`
const ProductListFilterRow = styled.div`
  display: flex;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px 20px;
`
const ProductListFilterBack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductListFilterBackBtn = styled(Button)`
  font-size: 20px;
  padding: 0;
`
const ProductListFilterBackText = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 152%;
  color: ${Colors.dark_grey};
`
const ProductListFilterPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 30px;
`
const ProductListFilterInput = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  border-radius: 5px;
  border: 1px solid ${Colors.medium_grey};
  padding: 7px;
  background: ${Colors.white_color};
  color: ${Colors.dark_grey};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    /* margin: 0; */
  }
`
const ProductListFilterPriceTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 152%;
  color: ${Colors.dark_grey};
`
const ProductListFilterPriceInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const ProductListFilterItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const ProductListFilterItemFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const ProductListFilterItemTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 152%;
  color: ${Colors.dark_grey};
  margin-bottom: 15px;
`
const ProductListFilterItemList = styled.div`
  display: none;
  &.active {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  margin-bottom: 20px;
`
const ProductListFilterPhoneModel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`
const ProductListFilterAllBtn = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: left;
  border: none;
  margin-top: 15px;
  color: ${Colors.dark_grey};
`
const ProductListRadio = styled.input`
  accent-color: ${Colors.bright_green};
`
const ProductListText = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${Colors.dark_grey};
`
const ProductListFilterSubmit = styled(Button)`
  display: flex;
  width: 100%;
  padding: 12px 59px;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${Colors.bright_green};
  background: ${Colors.white_color};
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
