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

export const UserCartContextAndActionStyles = { display: 'flex', flexDirection: 'column', alignItems: 'center' }

export const UserFormFieldStyles = {
  m: 1,
  minWidth: 280,
  maxHeight: 92,
}

export const UserFormButtonStyles = {
  m: 1,
  minWidth: 250,
  height: 35,
}

export const UserNameAndSurnameFieldStyles = {
  maxWidth: '48%',
  height: 40,
  mt: 1,
  mb: 1,
}

export const UserTypeKupac = 'kupac'

export const UserTypeZaposleni = 'zaposleni'
