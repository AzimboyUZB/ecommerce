import CheckoutBackIcon from "@/assets/icons/CheckoutBackIcon";
import { Page } from "@/components";
import OrderList from "@/components/checkout/OrderList";
import OrderPayment from "@/components/checkout/OrderPayment";
import OrderReceive from "@/components/checkout/OrderReceive";
import OrderSubmit from "@/components/checkout/OrderSubmit";
import UserData from "@/components/checkout/UserData";
import { Colors } from "@/helpers";
import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Checkout = () => {
  const router = useRouter();


  return (
    <Page>
      <Container>
        <CheckoutRow>
          <CheckoutTitle>
            <BackButton onClick={() => router.push({ pathname: "/cart" })}>
              <CheckoutBackIcon />
            </BackButton>
            Оформление заказа
          </CheckoutTitle>
          <OrderList />
          <OrderReceive />
          <OrderPayment />
          <UserData />
          <OrderSubmit />
        </CheckoutRow>
      </Container>
    </Page>
  );
};

export default Checkout;

const CheckoutRow = styled.div``;
const CheckoutTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: ${Colors.dark_grey};
`;
const BackButton = styled(Button)`
  padding: 8px 16px;
`;
