import { User } from './users.interfaces'

export type UserType = 'kupac' | 'zaposleni'

export type UpdateUserProps = { username: string; updatedAttributes: Partial<User> }
