import { FC, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { IPage } from './types'
import { useRouter } from 'next/router'
import { useCart, useLocalStorage } from '@/hooks'
import { useFavouriteCart } from '@/hooks/useCart'

const Page: FC<IPage> = ({ children }) => {
  const router = useRouter()
  const [isFooter, setIsFooter] = useState<boolean>(true)
  const isFooterArr: string[] = ['cart', 'checkout']
  const { cart, update } = useCart()
  const { favouriteCart, updatee } = useFavouriteCart()
  const [value] = useLocalStorage('cart', cart)
  const [favourites] = useLocalStorage('favouriteCart', favouriteCart)

  useEffect(() => {
    update(value.items)
    updatee(favourites.items)
  }, [])

  useEffect(() => {
    setIsFooter(isFooterArr.includes(router.pathname.substring(1)))
  }, [router])

  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>{children}</main>
      {isFooter ? null : <Footer />}
    </div>
  )
}

export default Page
