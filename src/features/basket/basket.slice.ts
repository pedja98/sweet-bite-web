import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BasketItem } from './basket.interfaces'
import { BasketInitialState } from '../../constants/basket'

const basketSlice = createSlice({
  name: 'basket',
  initialState: BasketInitialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<BasketItem>) => {
      const basketItem = {
        id: state.length === 0 ? 1 : state.length + 1,
        amount: action.payload.amount,
        productPic: action.payload.productPic,
        productName: action.payload.productName,
        priceOfSingleItem: action.payload.priceOfSingleItem,
        basketItemOwner: action.payload.basketItemOwner,
      }
      state.push(basketItem)
    },
    removeBasketItem: (state, action: PayloadAction<number>) => {
      return state.filter((basketItem) => basketItem.id !== action.payload)
    },
  },
})

export const { addItemToBasket, removeBasketItem } = basketSlice.actions
export default basketSlice.reducer
