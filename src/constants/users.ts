import { User } from '../features/users/users.interfaces'

export const UsersInitialState: User[] = [
  {
    username: 'mp233370m',
    password: 'password123',
    type: 'kupac',
    name: 'John',
    surname: 'Doe',
    address: '123 Main St',
    phone: '555-1234',
  },
  {
    username: 'mp170361d',
    password: 'password123',
    type: 'zaposleni',
    name: 'Jane',
    surname: 'Smith',
    address: '456 Oak St',
    phone: '555-5678',
  },
]
