import DropUpIcon from '@/assets/icons/DropUpIcon';
import DropdownIcon from '@/assets/icons/DropdownIcon';
import { productListFilter } from '@/data/productListFilter';
import { Colors } from '@/helpers';
import styled from '@emotion/styled';
import { Button, Input, Slider } from '@mui/material';
import React, { useState } from 'react'

const ProductListFilterLeft = () => {
  const [active, setActive] = useState(false)
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleDropdown = () => {
    setActive(!active)
  }
  return (
    <ProductListFilter>
      <ProductListFilterRow>
        <ProductListFilterPrice>
          <ProductListFilterPriceTitle>Цена</ProductListFilterPriceTitle>
          <ProductListFilterPriceInput>
            <ProductListFilterInput type='number' placeholder='от'></ProductListFilterInput>
            <ProductListFilterInput type='number' placeholder='до'></ProductListFilterInput>
          </ProductListFilterPriceInput>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </ProductListFilterPrice>
        {
          productListFilter.map((item) => (
            <ProductListFilterItems key={item.id}>
              <ProductListFilterItemFlex onClick={handleDropdown}>
                <ProductListFilterItemTitle>{item.title}</ProductListFilterItemTitle>
                {
                  active ? <DropdownIcon /> : <DropUpIcon />
                }
              </ProductListFilterItemFlex>
              <ProductListFilterItemList className={active ? "active" : ""}>
                {
                  item.children.map((phone) => (
                    <ProductListFilterPhoneModel key={phone.id}>
                      <ProductListRadio name={phone.text} id={phone.text} type="checkbox" />
                      <ProductListText htmlFor={phone.text}>{phone.text}</ProductListText>
                    </ProductListFilterPhoneModel>
                  ))
                }
                <ProductListFilterAllBtn>Показать еще</ProductListFilterAllBtn>
              </ProductListFilterItemList>
            </ProductListFilterItems>
          ))
        }
        <ProductListFilterSubmit>
          Применить
        </ProductListFilterSubmit>
        <ProductListFilterSubmit>
          Сбросить фильтры
        </ProductListFilterSubmit>
      </ProductListFilterRow>
    </ProductListFilter>
  )
}

export default ProductListFilterLeft;

const ProductListFilter = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 0px 0px 2px 2px;
  background: ${Colors.white_color};
  filter: drop-shadow(1px 2px 16px rgba(54, 58, 69, 0.08));
  margin-right: 30px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`
const ProductListFilterRow = styled.div`
  display: flex;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 25px 20px;
`
const ProductListFilterPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 30px;
`
const ProductListFilterInput = styled.input`
  width: 150px;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  border-radius: 5px;
  border: 1px solid ${Colors.medium_grey};
  padding: 3px;
  background: ${Colors.white_color};
  color: ${Colors.dark_grey};
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
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