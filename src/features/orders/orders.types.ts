export type OrderProduct = { productPic: string; productName: string; priceOfSingleItem: number; amount: number }

export type OrderType = 'waiting' | 'accepted' | 'denied'

export type OrderNotification = { text: string; read: boolean }

export type ReadNotificationsProps = { username: string }
