import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersInitialState } from '../../constants/user'
import { User } from './users.interfaces'

const usersSlice = createSlice({
  name: 'users',
  initialState: UsersInitialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
    updateUser: (state, action: PayloadAction<{ username: string; updatedAttributes: Partial<User> }>) => {
      const { username, updatedAttributes } = action.payload
      const userIndex = state.findIndex((user) => user.username === username)
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...updatedAttributes }
      }
    },
  },
})

export const { addUser, updateUser } = usersSlice.actions
export default usersSlice.reducer
