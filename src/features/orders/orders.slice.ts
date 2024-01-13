import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order } from './orders.interfaces'
import { OrdersInitialState } from '../../constants/orders'
import { OrderType, ReadNotificationsProps } from './orders.types'

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
        notification: { text: '', read: false },
      } as Order
      state.push(order)
    },
    changeOrderStatus: (state, action: PayloadAction<{ orderId: number; newStatus: OrderType }>) => {
      const { orderId, newStatus } = action.payload
      const orderIndex = state.findIndex((order) => order.id === orderId)

      if (orderIndex !== -1) {
        state[orderIndex].status = newStatus
        if (newStatus === 'accepted') {
          state[orderIndex].notification.text = `Narudžbina ${state[orderIndex].id} je odobrena`
        } else if (newStatus === 'denied') {
          state[orderIndex].notification.text = `Narudžbina ${state[orderIndex].id} je odbijena`
        }
      }
    },
    readNotifications: (state, action: PayloadAction<ReadNotificationsProps>) => {
      const username = action.payload.username
      state.forEach((order) => {
        if (order.username === username && order.notification.text !== '' && !order.notification.read) {
          order.notification.read = true
        }
      })
    },
  },
})

export const { createOrder, changeOrderStatus, readNotifications } = ordersSlice.actions
export default ordersSlice.reducer
