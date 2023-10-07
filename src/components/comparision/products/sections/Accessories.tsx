import styled from "@emotion/styled";
import { FC } from "react";
import { Flex, List, ProductCard } from "@/components";
import { accessouries, products } from "@/data";
import { CategoryButton } from "../components/ui";

const Accessories: FC = () => {
  return (
    <Flex direction="column" align="flex-start" gap={20}>
      <StyledFlex justify="space-between" gap={10}>
        <List array={accessouries} Component={CategoryButton} />
        <CategoryButton data={{ text: "Еще", url: "again" }} />
      </StyledFlex>
      <Grid>
        <List array={products} Component={ProductCard} />
      </Grid>
    </Flex>
  );
};

export default Accessories;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StyledFlex = styled(Flex)`
  width: 100%;
  overflow-x: scroll;
  padding-inline: 5px;
  padding-block: 15px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    flex-shrink: 0;
  }
`;
