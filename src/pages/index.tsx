import { useEffect } from 'react'
import {
  Banner,
  Container,
  FooterSubscribe,
  Page,
  ProductsList,
  ServicesSection,
  BrandsSection,
} from '@/components'
import { Section } from '@/components'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  domain,
  productsListUrl,
  eventsListUrl,
  categoryListUrl,
  brandsListUrl,
} from './../helpers/urls'
import {
  ProductsResponseT,
  CategoriesResponseT,
  BrandsResponseT,
  EventsReponseT,
} from '../helpers/type'
import { setBrands } from '@/redux/slices/brandsSlice'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { setProducts } from '@/redux/slices/productsSlice'
import { setCategories } from '@/redux/slices/categorySlice'

import { setEvents } from '@/redux/slices/eventSlice'
export default function Home({
  productsResponse,
  eventsResponse,
  categoryResponse,
  brandsResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { products } = useTypedSelector((state) => state.products)

  const { brands } = useTypedSelector((state) => state.events)
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(setProducts({ products: productsResponse.products }))
    dispatch(setEvents({ events: eventsResponse.events }))
    dispatch(setCategories({ categories: categoryResponse.categories }))
    dispatch(setBrands({ brands: brandsResponse.brands }))
  }, [productsResponse, categoryResponse, brandsResponse])

  return (
    <>
      <Page>
        <Banner brands={brands} />
        <Container>
          <Section title='Хиты продаж' link={{ url: '/productlist' }}>
            <ProductsList products={products} />
          </Section>
          <Section title='Новинки' link={{ url: '/productlist' }}>
            <ProductsList products={products} />
          </Section>
          {/* <Section>
            <InformSection />
          </Section> */}
          <Section title='Новинки' link={{ url: '/productlist' }}>
            <ProductsList products={products} />
          </Section>
          <Section title='Популярные бренды' link={{ url: '/productlist' }}>
            <BrandsSection />
          </Section>
          <Section title='Новинки' link={{ url: '/productlist' }}>
            <ProductsList products={products} />
          </Section>
          <Section>
            <ServicesSection />
          </Section>
        </Container>
        <FooterSubscribe />
      </Page>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  productsResponse: ProductsResponseT
  categoryResponse: CategoriesResponseT
  eventsResponse: EventsReponseT
  brandsResponse: BrandsResponseT
}> = async () => {
  const [productsResponse, eventsResponse, categoryResponse, brandsResponse] =
    await Promise.all([
      fetch(`${domain}${productsListUrl}?type=new`).then((r) => r.json()),
      fetch(`${domain}${eventsListUrl}`).then((r) => r.json()),
      fetch(`${domain}${categoryListUrl}`).then((r) => r.json()),
      fetch(`${domain}${brandsListUrl}`).then((r) => r.json()),
    ])

  // const [productsRes, eventsRes] = await Promise.all([
  //   productsResponse.json(),
  //   eventsResponse.json(),
  // ])

  return {
    props: {
      productsResponse,
      eventsResponse,
      categoryResponse,
      brandsResponse,
    },
  }

  // const res = await fetch(`${domain}${productsListUrl}?type=new`)
  // const productsResopnse = await res.json()
  // return { props: { productsResopnse } }
}
