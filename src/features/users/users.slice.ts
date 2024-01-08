import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersInitialState } from '../../constants/users'
import { User } from './users.interfaces'

const usersSlice = createSlice({
  name: 'users',
  initialState: UsersInitialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
  },
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer
