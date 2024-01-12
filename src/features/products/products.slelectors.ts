import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export const selectProductByType = ({ type }: { type: 'kolač' | 'torta' }) =>
  createSelector(
    (state: RootState) => state.products,
    (products) => {
      return products.filter((product) => product.type === type)
    },
  )

export const selectProductById = ({ id }: { id: number }) =>
  createSelector(
    (state: RootState) => state.products,
    (products) => {
      return products.find((product) => product.id === id)
    },
  )
