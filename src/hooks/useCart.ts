import { IProductScheme } from '@/components/cards/types'
import { useTypedDispatch } from './useTypedDispatch'
import { useTypedSelector } from './useTypedSelector'
import {
  setCart,
  deleteCart as DeleteCartid,
  increaseCart,
  decreaseCart,
  updateCart,
} from '@/redux/slices/cartSlice'
import {
  setFavouriteCart,
  deleteFavouriteCart,
  updateFavouriteCart,
} from '@/redux/slices/favouriteCartSlice'
import { ICart } from '@/redux/types'
import useLocalStorage from './useLocaleStorage'
import { ProductT } from '@/helpers/type'

export const useCart = () => {
  const cart = useTypedSelector((state) => state.cart)
  const [_, setValue] = useLocalStorage('cart', [])
  const dispatch = useTypedDispatch()

  const add = (product: ProductT) => {
    dispatch(setCart({ product, setValue }))
  }

  const remove = (id: number) => {
    dispatch(DeleteCartid({ id, setValue }))
  }

  const increase = (id: number) => {
    dispatch(increaseCart({ id, setValue }))
  }

  const decrease = (id: number) => {
    dispatch(decreaseCart({ id, setValue }))
  }

  const update = (items: ICart[]) => {
    dispatch(updateCart(items))
  }

  return { add, remove, increase, decrease, update, cart }
}

export const useFavouriteCart = () => {
  const favouriteCart = useTypedSelector((state) => state.favouriteCart)
  const [value, setValue] = useLocalStorage('favouriteCart', [])
  const dispatch = useTypedDispatch()
  const addFavouriteCart = (product: ProductT) => {
    dispatch(setFavouriteCart({ product, setValue }))
  }

  const removeFavouriteCart = (id: number) => {
    dispatch(deleteFavouriteCart({ id, setValue }))
  }

  const updatee = (items: ICart[]) => {
    dispatch(updateFavouriteCart(items))
  }

  const toggleFavouriteCart = (product: ProductT) => {
    if (favouriteCart.items.some((item) => item.id === product.id)) {
      dispatch(deleteFavouriteCart({ id: product.id, setValue }))
    } else {
      dispatch(setFavouriteCart({ product, setValue }))
    }
  }
  return {
    addFavouriteCart,
    removeFavouriteCart,
    updatee,
    toggleFavouriteCart,
    favouriteCart,
  }
}
