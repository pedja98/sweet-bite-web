import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthInitialState } from '../../constants/auth'
import { SignInProps } from './auth.types'

const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInProps>) => {
      return { ...state, ...action.payload }
    },
    signOut: (state) => {
      state.username = ''
      state.type = ''
    },
  },
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer
