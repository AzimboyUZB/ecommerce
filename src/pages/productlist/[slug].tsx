import { Page } from '@/components'
import ProductListFilterLeft from '@/components/productList/ProductListFilterLeft'
import ProductListFilterTop from '@/components/productList/ProductListFilterTop'
import ProductListItems from '@/components/productList/ProductListItems'
import ProductListTitle from '@/components/productList/ProductListTitle'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ProductsResponseT } from '@/helpers/type'
import { domain, categoryWithSlug } from '@/helpers/urls'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect } from 'react'
import { setProducts } from '@/redux/slices/productsSlice'

const ProductList = ({
  productsResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(productsResponse)

  const { products } = useTypedSelector((state) => state.products)
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(setProducts({ products: productsResponse.products }))
  }, [productsResponse])

  return (
    <Page>
      <Container>
        <ProductListTitle />
        <ProductListMain>
          <ProductListLeft />
          <ProductListRow>
            <ProductListFilterTop />
            <ProductListItems products={products} />
          </ProductListRow>
        </ProductListMain>
      </Container>
    </Page>
  )
}

export default ProductList

const ProductListMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const ProductListLeft = styled(ProductListFilterLeft)`
  flex: 1;
`
const ProductListRow = styled.div`
  flex: 1 1 auto;
`

export const getServerSideProps: GetServerSideProps<{
  productsResponse: ProductsResponseT
}> = async ({ params }) => {
  const [productsResponse] = await Promise.all([
    fetch(`${domain}${categoryWithSlug(String(params?.slug))}`).then((r) =>
      r.json()
    ),
  ])

  return {
    props: {
      productsResponse,
    },
  }
}
