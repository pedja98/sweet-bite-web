import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order } from './orders.interfaces'
import { OrdersInitialState } from '../../constants/orders'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: OrdersInitialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
      const order = {
        id: state.length === 0 ? 1 : state.length + 1,
        totalAmount: action.payload.totalAmount,
        products: action.payload.products,
        username: action.payload.username,
      }
      state.push(order)
    },
  },
})

export const { createOrder } = ordersSlice.actions
export default ordersSlice.reducer
