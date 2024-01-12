export interface Order {
  id: number
  products: OrderProduct[]
  orderTotalPrice: number
  username: string
  status: OrderType
}

export type OrderProduct = { productPic: string; productName: string; priceOfSingleItem: number; amount: number }
export type OrderType = 'waiting' | 'accepted' | 'denied'
