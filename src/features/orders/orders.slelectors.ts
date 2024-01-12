import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectAllOrders = createSelector(
  (state: RootState) => state.orders,
  (orders) => orders,
)

export const selectOrdersByUsername = ({ username }: { username: string }) =>
  createSelector(
    (state: RootState) => state.orders,
    (orders) => {
      return orders.filter((order) => order.username === username)
    },
  )
