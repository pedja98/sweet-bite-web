import { OrderNotification, OrderProduct, OrderType } from './orders.types'

export interface Order {
  id: number
  products: OrderProduct[]
  orderTotalPrice: number
  username: string
  status: OrderType
  notification: OrderNotification
}
