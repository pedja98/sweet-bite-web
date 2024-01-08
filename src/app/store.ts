import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/users.slice'
import notificationsReducer from '../features/notifications/notifications.slice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    notifications: notificationsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
