import { Colors } from "@/helpers";
import styled from "@emotion/styled";
import React from "react";
import BreadCrumb from "../ui/BreadCrumb";
import { phoneModels } from "@/data/productListFilter";
import { Button } from "@mui/material";

const ProductListTitle = () => {
  return (
    <ProductListFilterTitleRow>
      <BreadCrumb text="Телефоны и аксессуары" />
      <ProductListFilterTitle>Смартфоны</ProductListFilterTitle>
      <ProductListFilterPhoneModels>
        {phoneModels.map((phone) => (
          <PhoneBackground key={phone.id}>
            {phone.text}
          </PhoneBackground>
        ))}
      </ProductListFilterPhoneModels>
    </ProductListFilterTitleRow>
  );
};

export default ProductListTitle;

const ProductListFilterTitleRow = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const ProductListFilterTitle = styled.span`
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
  line-height: 120%;
  color: ${Colors.dark_grey};
  margin: 20px 0;
`;
const ProductListFilterPhoneModels = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;
const PhoneBackground = styled(Button)`
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  color: ${Colors.dark_grey};
  background: ${Colors.white_color};
  box-shadow: 1px 2px 16px 3px rgba(54, 58, 69, 0.08);
`;