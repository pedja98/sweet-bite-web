import { UserType } from './users.types'

export interface User {
  username: string
  password: string
  type: UserType
  name: string
  surname: string
  address: string
  phone: string
}

export interface UserAttributes {
  username?: string
  password?: string
  type?: string
}
