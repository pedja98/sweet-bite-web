import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { User, UserAttributes } from './users.interfaces'

export const selectUserByAttributes = ({ username, password, type }: UserAttributes) =>
  createSelector(
    (state: RootState) => state.users,
    (users) => {
      if (!username && !password && !type) {
        return undefined
      }

      return users.find((user) => {
        return user.username === username && user.password === password && user.type === type
      })
    },
  )

export const selectUserProperty = ({ username, key }: { username: string; key?: keyof User }) =>
  createSelector(
    (state: RootState) => state.users,
    (users) => {
      const user = users.find((user) => {
        return user.username === username
      })
      return user ? (key ? user[key] : user) : undefined
    },
  )
