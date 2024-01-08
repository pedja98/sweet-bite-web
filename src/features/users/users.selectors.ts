import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { UserAttributes } from './users.interfaces'

export const selectUserByUsername = (username: string) =>
  createSelector(
    (state: RootState) => state.users,
    (users) => users.find((user) => user.username === username),
  )

export const selectUserByAttributes = ({ username, password, type }: UserAttributes) =>
  createSelector(
    (state: RootState) => state.users,
    (users) => {
      if (!username && !password && !type) {
        return undefined
      }

      return users.find((user) => {
        return (
          (!username || user.username === username) &&
          (!password || user.password === password) &&
          (!type || user.type === type)
        )
      })
    },
  )
