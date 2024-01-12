import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectBasketForCurrentUser = ({ username }: { username: string }) =>
  createSelector(
    (state: RootState) => state.basket,
    (basket) => {
      return basket.filter((basketItem) => basketItem.basketItemOwner === username)
    },
  )
