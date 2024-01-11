import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsInitialState } from '../../constants/product'
import { Product } from './products.interfaces'

const productsSlice = createSlice({
  name: 'products',
  initialState: ProductsInitialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [...state, action.payload]
    },
  },
})

export const { addProduct } = productsSlice.actions
export default productsSlice.reducer
