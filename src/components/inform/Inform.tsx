import styled from "@emotion/styled";
import { Container } from "@mui/material";
import CashbackImage from "../Images/CashbackImage";
import { FC } from "react";
import { Flex } from "../ui/Flex";
import DeliveryImage from "../Images/Delivery";

const Inform: FC = (props) => {
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between">
          <CashbackImage />
          <DeliveryImage />
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Inform;

const Wrapper = styled.div``;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
