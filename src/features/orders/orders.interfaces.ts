export interface Order {
  id: number
  products: OrderProduct[]
  totalAmount: number
  username: string
}

export type OrderProduct = { productPic: string; productName: string; priceOfSingleItem: number }
