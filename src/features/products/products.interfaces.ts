export interface Product {
  id: number
  name: string
  description: string
  price: number
  type: 'kolač' | 'torta'
  ingredients: string
  pic: string
  comments: string[]
}
