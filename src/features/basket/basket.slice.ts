import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BasketItem } from './basket.interfaces'
import { BasketInitialState } from '../../constants/basket'

const basketSlice = createSlice({
  name: 'basket',
  initialState: BasketInitialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.push(action.payload)
    },
  },
})

export const { addItemToBasket } = basketSlice.actions
export default basketSlice.reducer
