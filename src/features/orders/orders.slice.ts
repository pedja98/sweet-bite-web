import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, OrderType } from './orders.interfaces'
import { OrdersInitialState } from '../../constants/orders'

const ordersSlice = createSlice({
  name: 'orders',
  initialState: OrdersInitialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
      const order = {
        id: state.length === 0 ? 1 : state.length + 1,
        orderTotalPrice: action.payload.orderTotalPrice,
        products: action.payload.products,
        username: action.payload.username,
        status: 'waiting',
      } as Order
      state.push(order)
    },
    changeOrderStatus: (state, action: PayloadAction<{ orderId: number; newStatus: OrderType }>) => {
      const { orderId, newStatus } = action.payload
      const orderIndex = state.findIndex((order) => order.id === orderId)

      if (orderIndex !== -1) {
        state[orderIndex].status = newStatus
      }
    },
  },
})

export const { createOrder, changeOrderStatus } = ordersSlice.actions
export default ordersSlice.reducer
