import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsInitialState } from '../../constants/product'
import { Product } from './products.interfaces'

const productsSlice = createSlice({
  name: 'products',
  initialState: ProductsInitialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const product = {
        id: state.length === 0 ? 1 : state.length + 1,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        type: action.payload.type,
        ingredients: action.payload.ingredients,
        pic: action.payload.pic,
        comments: [],
      }
      state.push(product)
    },
    addCommentToProduct: (state, action: PayloadAction<{ productId: number; comment: string }>) => {
      const { productId, comment } = action.payload
      const productIndex = state.findIndex((product) => product.id === productId)

      if (productIndex !== -1) {
        const updatedProduct = {
          ...state[productIndex],
          comments: [...state[productIndex].comments, comment],
        }
        state[productIndex] = updatedProduct
      }
    },
  },
})

export const { addProduct, addCommentToProduct } = productsSlice.actions
export default productsSlice.reducer
