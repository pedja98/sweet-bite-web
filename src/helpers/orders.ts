import { OrderType } from '../features/orders/orders.types'

export const getOrderStatusText = (status: OrderType): string => {
  const statusMap: Record<OrderType, string> = {
    waiting: 'Na čekanju',
    accepted: 'Odobreno',
    denied: 'Odbijeno',
  }

  return statusMap[status] || 'Unknown Status'
}
