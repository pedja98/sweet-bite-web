import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Auth } from './auth.interfaces'

export const selectAuthAttributeByKey = (key: keyof Auth) =>
  createSelector(
    (state: RootState) => state.auth,
    (auth) => auth[key],
  )
