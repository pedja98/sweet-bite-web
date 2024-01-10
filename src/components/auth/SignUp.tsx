import { Card, InputLabel, SelectChangeEvent, Typography } from '@mui/material'
import {
  FormCartContextStyled,
  MenuItemStyled,
  NameSurnameContainer,
  Root,
  SelectStyled,
  StyledCenterBackgroundContainer,
  FormTextFieldStyled,
  FormCartActionStyled,
  FormButtonStyled,
  FormControlStyled,
  FormSmallTextFieldStyled,
} from '../../styles/common'
import { SignUpProps } from '../../interfaces/signUp'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addUser } from '../../features/users/users.slice'
import { User } from '../../features/users/users.interfaces'
import { setNotification } from '../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../constants/notification'
import { selectUserProperty } from '../../features/users/users.selectors'
import { useNavigate } from 'react-router-dom'
import { UserTypeKupac, UserTypeZaposleni } from '../../constants/user'

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
  const isUsernameTaken = !!useAppSelector(selectUserProperty({ username: signUpData.username }))

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
    <StyledCenterBackgroundContainer>
      <Card
        variant='outlined'
        sx={{
          maxWidth: 310,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '1.5%',
        }}
      >
        <FormCartContextStyled>
          <Root>
            <Typography variant='h5'>KREIRAJ NALOG</Typography>
          </Root>
          <NameSurnameContainer>
            <FormSmallTextFieldStyled
              sx={{ m: 1 }}
              id='name'
              label='Ime'
              value={signUpData.name}
              onChange={handleChange('name')}
            />
            <FormSmallTextFieldStyled
              id='surname'
              label='Prezime'
              value={signUpData.surname}
              onChange={handleChange('surname')}
              sx={{ m: 1 }}
            />
          </NameSurnameContainer>
          <FormTextFieldStyled
            id='address'
            label='Adresa'
            sx={{ m: 1 }}
            value={signUpData.address}
            onChange={handleChange('address')}
          />
          <FormTextFieldStyled
            sx={{ m: 1 }}
            id='phone'
            label='Telefon'
            value={signUpData.phone}
            onChange={handleChange('phone')}
          />
          <FormTextFieldStyled
            id='username'
            label='Korisničko ime'
            value={signUpData.username}
            onChange={handleChange('username')}
            sx={{ m: 1 }}
          />
          <FormControlStyled size='small' sx={{ m: 1 }}>
            <InputLabel id='type'>Tip korisnika</InputLabel>
            <SelectStyled labelId='type' id='type' label='Type' value={signUpData.type} onChange={handleChange('type')}>
              <MenuItemStyled value=''>
                <em>Nijedan</em>
              </MenuItemStyled>
              <MenuItemStyled value={UserTypeKupac}>Kupac</MenuItemStyled>
              <MenuItemStyled value={UserTypeZaposleni}>Zaposleni</MenuItemStyled>
            </SelectStyled>
          </FormControlStyled>
          <FormTextFieldStyled
            sx={{ m: 1 }}
            id='password'
            label='Lozinka'
            type='password'
            value={signUpData.password}
            onChange={handleChange('password')}
          />
          <FormTextFieldStyled
            sx={{ m: 1 }}
            id='confirm'
            label='Potvrda'
            type='password'
            value={signUpData.confirm}
            onChange={handleChange('confirm')}
          />
        </FormCartContextStyled>
        <FormCartActionStyled>
          <FormButtonStyled sx={{ m: 1 }} ref={signUpButtonRef} onClick={handleSignUp}>
            Kreiraj nalog
          </FormButtonStyled>
        </FormCartActionStyled>
      </Card>
    </StyledCenterBackgroundContainer>
  )
}

export default SignUp
