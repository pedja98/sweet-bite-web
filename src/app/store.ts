import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import usersReducer from '../features/users/users.slice'
import notificationsReducer from '../features/notifications/notifications.slice'
import authReducer from '../features/auth/auth.slice'
import productsReducer from '../features/products/products.slice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  users: usersReducer,
  notifications: notificationsReducer,
  auth: authReducer,
  products: productsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
