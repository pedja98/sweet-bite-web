import { OrderNotification } from '../features/orders/orders.types'

export interface OrderNotificationsProps {
  notifications: OrderNotification[]
  authUsername: string
  readNotifications: (params: { username: string }) => void
}
