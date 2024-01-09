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
import {
  LinkStyled,
  MenuItemStyled,
  Root,
  SelectStyled,
  StyledCenterBackgroundContainer,
  TextFieldStyled,
} from '../../styles/common'
import { SignInFormButtonStyles, SignInCartContextAndActionStyles, SignInFormFieldStyles } from '../../constants/signIn'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SignInProps } from '../../interfaces/signIn'
import { setNotification } from '../../features/notifications/notifications.slice'
import { NotificationTypeWarning } from '../../constants/notification'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUserByAttributes } from '../../features/users/users.selectors'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../features/auth/auth.slice'
import { UserTypeKupac, UserTypeZaposleni } from '../../constants/user'

const SignIn = () => {
  const [signInData, setSignInData] = useState<SignInProps>({
    username: '',
    password: '',
    type: '',
  })
  const dispatch = useAppDispatch()
  const signInButtonRef = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  const doesUserExist = !!useAppSelector(
    selectUserByAttributes({
      username: signInData.username,
      password: signInData.password,
      type: signInData.type,
    }),
  )

  useEffect(() => {
    if (signInButtonRef.current) {
      signInButtonRef.current.focus()
    }
  }, [])

  const handleChange =
    (field: keyof typeof signInData) =>
    (event: SelectChangeEvent<unknown> | ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setSignInData({ ...signInData, [field]: event.target.value as string })
    }

  const handleSignIn = () => {
    if (Object.values(signInData).includes('')) {
      dispatch(
        setNotification({
          text: 'Sva polja moraju biti popunjena!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    if (!doesUserExist) {
      dispatch(
        setNotification({
          text: 'Korisnik sa traženim kredencijalima ne postoji u bazi!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }

    dispatch(signIn({ username: signInData.username, type: signInData.type }))
    navigate('/user')
  }

  return (
    <StyledCenterBackgroundContainer>
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
        <CardContent sx={SignInCartContextAndActionStyles}>
          <Root>
            <Typography variant='h5'>DOBRODOŠLI</Typography>
          </Root>
          <TextFieldStyled
            sx={SignInFormFieldStyles}
            id='username'
            label='Korisničko ime'
            value={signInData.username}
            onChange={handleChange('username')}
          />
          <TextFieldStyled
            sx={SignInFormFieldStyles}
            id='password'
            label='Lozinka'
            type='password'
            value={signInData.password}
            onChange={handleChange('password')}
          />
          <FormControl sx={SignInFormFieldStyles} size='small'>
            <InputLabel id='type'>Tip korisnika</InputLabel>
            <SelectStyled labelId='type' id='type' label='Type' value={signInData.type} onChange={handleChange('type')}>
              <MenuItemStyled value=''>
                <em>Nijedan</em>
              </MenuItemStyled>
              <MenuItemStyled value={UserTypeKupac}>Kupac</MenuItemStyled>
              <MenuItemStyled value={UserTypeZaposleni}>Zaposleni</MenuItemStyled>
            </SelectStyled>
          </FormControl>
        </CardContent>
        <LinkStyled to='/sign-up'>Nemate nalog?</LinkStyled>
        <CardActions sx={SignInCartContextAndActionStyles}>
          <Button ref={signInButtonRef} sx={SignInFormButtonStyles} onClick={handleSignIn}>
            Prijavi se
          </Button>
        </CardActions>
      </Card>
    </StyledCenterBackgroundContainer>
  )
}

export default SignIn
