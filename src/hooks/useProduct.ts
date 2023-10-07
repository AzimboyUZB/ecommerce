import { NextRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTypedSelector } from './useTypedSelector'
import { ProductT } from '@/helpers/type'

export const useProduct = (router: NextRouter) => {
  const [slug, setSlug] = useState<string | string[] | undefined>(undefined)
  const { products } = useTypedSelector((state) => state.products)

  useEffect(() => {
    setSlug(router.query?.slug)
  }, [router])

  const product =
    products.find((product) => product.slug === slug) || ({} as ProductT)

  console.log(products)

  return {
    product,
    loading: !slug,
  }
}
