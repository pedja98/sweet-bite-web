import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectAllBasketItems = createSelector(
  (state: RootState) => state.basket,
  (basket) => basket,
)
