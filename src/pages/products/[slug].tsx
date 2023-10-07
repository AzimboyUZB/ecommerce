import styled from "@emotion/styled";
import { FC } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Flex,
  LoadingWrapper,
  Page,
  ProductsList,
  Section,
  BreadCrumb,
} from "@/components";
import { Shadows } from "@/helpers";
import { useProduct } from "@/hooks";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { MainDetails } from "@/components/comparision/products/components";
import { Tabs } from "@/components/comparision/products/sections";

const ProductDetails: FC = () => {
  const router = useRouter();
  const { product, loading } = useProduct(router);
  const { products } = useTypedSelector((state) => state.products);

  return (
    <Page>
      <LoadingWrapper loading={loading}>
        <Container>
          <BreadCrumb text="Категории" />
          <ShadowContainer>
            <ContainerSM>
              <Flex direction="column" align="flex-start" gap={40}>
                <MainDetails data={product} />
                <Tabs data={product} />
                <Section title="Вместе с этим товаром покупают">
                  <ProductsList products={products} sm />
                </Section>
              </Flex>
            </ContainerSM>
          </ShadowContainer>
        </Container>
      </LoadingWrapper>
    </Page>
  );
};

// export const getServerSideProps: GetServerSideProps<{
//   productResponse: any;
// }> = async ({ params }) => {
//   const res = await fetch(
//     `${domain}${productWithSlug(params?.slug as string)}`
//   );
//   const productResopnse = await res.json();
//   return { props: { productResopnse } };
// };

export default ProductDetails;

const ShadowContainer = styled(Container)`
  padding-top: 30px;
  border-radius: 10px;
  margin-bottom: 80px;
  ${Shadows.shadow_white};

  @media screen and (max-width: 575px) {
    box-shadow: unset;
  }
`;

const ContainerSM = styled.div`
  max-width: 1070px;
  width: 100%;
  margin-inline: auto;

  @media screen and (max-width: 575px) {
    max-width: 100%;
    width: 100%;
  }
`;
