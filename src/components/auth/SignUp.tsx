import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { MenuItemStyled, NameSurnameContainer, Root, SelectStyled, TextFieldStyled } from '../../styles/common'
import {
  SignUpButtonStyles,
  SignUpCartContextAndActionStyles,
  SignUpFieldStyles,
  SignUpNameAndSurnameFieldStyles,
} from '../../constants/signUp'
import { SignUpProps } from '../../interfaces/signUp'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addUser } from '../../features/users/users.slice'
import { User } from '../../features/users/users.interfaces'
import { setNotification } from '../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../constants/notifications'
import { selectUserByAttributes } from '../../features/users/users.selectors'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [signUpData, setSignUpData] = useState<SignUpProps>({
    username: '',
    password: '',
    type: '',
    name: '',
    surname: '',
    address: '',
    phone: '',
    confirm: '',
  })
  const dispatch = useAppDispatch()
  const isUsernameTaken = !!useAppSelector(selectUserByAttributes({ username: signUpData.username }))

  const signUpButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (signUpButtonRef.current) {
      signUpButtonRef.current.focus()
    }
  }, [])

  const handleChange =
    (field: keyof typeof signUpData) =>
    (event: SelectChangeEvent<unknown> | ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setSignUpData({ ...signUpData, [field]: event.target.value as string })
    }

  const handleSignUp = () => {
    if (Object.values(signUpData).includes('')) {
      dispatch(
        setNotification({
          text: 'Sva polja moraju biti popunjena!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    if (signUpData.password !== signUpData.confirm) {
      dispatch(
        setNotification({
          text: 'Lozinka i potvrda lozinke se razlikuju!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    if (isUsernameTaken) {
      dispatch(
        setNotification({
          text: 'Korisničko ime je zauzeto!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    dispatch(
      addUser({
        ...(signUpData as User),
      }),
    )
    dispatch(
      setNotification({
        text: 'Novi korisnik je uspešno kreiran!',
        type: NotificationTypeSuccess,
      }),
    )
    navigate('/')
  }

  return (
    <Card
      variant='outlined'
      sx={{
        maxWidth: 310,
        maxHeight: 635,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1.5%',
      }}
    >
      <CardContent sx={SignUpCartContextAndActionStyles}>
        <Root>
          <Typography variant='h5'>KRERRAJ NALOG</Typography>
        </Root>
        <NameSurnameContainer>
          <TextFieldStyled
            sx={SignUpNameAndSurnameFieldStyles}
            id='name'
            label='Ime'
            value={signUpData.name}
            onChange={handleChange('name')}
          />
          <TextFieldStyled
            sx={SignUpNameAndSurnameFieldStyles}
            id='surname'
            label='Prezime'
            value={signUpData.surname}
            onChange={handleChange('surname')}
          />
        </NameSurnameContainer>
        <TextFieldStyled
          sx={SignUpFieldStyles}
          id='address'
          label='Adresa'
          value={signUpData.address}
          onChange={handleChange('address')}
        />
        <TextFieldStyled
          sx={SignUpFieldStyles}
          id='phone'
          label='Telefon'
          value={signUpData.phone}
          onChange={handleChange('phone')}
        />
        <TextFieldStyled
          sx={SignUpFieldStyles}
          id='username'
          label='Korisničko ime'
          value={signUpData.username}
          onChange={handleChange('username')}
        />
        <FormControl sx={SignUpFieldStyles} size='small'>
          <InputLabel id='type'>Tip korisnika</InputLabel>
          <SelectStyled labelId='type' id='type' label='Type' value={signUpData.type} onChange={handleChange('type')}>
            <MenuItemStyled value=''>
              <em>Nijedan</em>
            </MenuItemStyled>
            <MenuItemStyled value={'kupac'}>Kupac</MenuItemStyled>
            <MenuItemStyled value={'zaposleni'}>Zaposleni</MenuItemStyled>
          </SelectStyled>
        </FormControl>
        <TextFieldStyled
          sx={SignUpFieldStyles}
          id='password'
          label='Lozinka'
          type='password'
          value={signUpData.password}
          onChange={handleChange('password')}
        />
        <TextFieldStyled
          sx={SignUpFieldStyles}
          id='confirm'
          label='Potvrda'
          type='password'
          value={signUpData.confirm}
          onChange={handleChange('confirm')}
        />
      </CardContent>
      <CardActions sx={SignUpCartContextAndActionStyles}>
        <Button ref={signUpButtonRef} sx={SignUpButtonStyles} onClick={handleSignUp}>
          Kreiraj nalog
        </Button>
      </CardActions>
    </Card>
  )
}

export default SignUp
