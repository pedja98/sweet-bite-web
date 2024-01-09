import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectUserProperty } from '../../../features/users/users.selectors'
import { DetailsProps } from '../../../interfaces/users'
import { Button, Card, CardActions, CardContent, SelectChangeEvent, Typography } from '@mui/material'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../../constants/notification'
import { UserStyledCenterBackgroundContainer } from '../../../styles/users'
import { NameSurnameContainer, Root, TextFieldStyled } from '../../../styles/common'
import {
  UserCartContextAndActionStyles,
  UserFormButtonStyles,
  UserFormFieldStyles,
  UserNameAndSurnameFieldStyles,
} from '../../../constants/user'
import { selectAuthKey } from '../../../features/auth/auth.selectors'
import { User } from '../../../features/users/users.interfaces'
import { updateUser } from '../../../features/users/users.slice'
import { signIn } from '../../../features/auth/auth.slice'

const Details = () => {
  const authUsername: string = useAppSelector(selectAuthKey('username'))
  const authUserDetails: User | undefined = useAppSelector(selectUserProperty({ username: authUsername })) as
    | User
    | undefined

  const [detailsData, setDetailsData] = useState<DetailsProps>({
    username: authUserDetails?.username || '',
    name: authUserDetails?.name || '',
    surname: authUserDetails?.surname || '',
    address: authUserDetails?.address || '',
    phone: authUserDetails?.phone || '',
  })
  const dispatch = useAppDispatch()
  const isUsernameTaken = !!useAppSelector(selectUserProperty({ username: detailsData.username }))

  const detailsButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (detailsButtonRef.current) {
      detailsButtonRef.current.focus()
    }
  }, [])

  const handleChange =
    (field: keyof typeof detailsData) =>
    (event: SelectChangeEvent<unknown> | ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setDetailsData({ ...detailsData, [field]: event.target.value as string })
    }

  const handleSavechanges = () => {
    if (
      authUserDetails &&
      authUserDetails.username === detailsData.username &&
      authUserDetails.surname === detailsData.surname &&
      authUserDetails.address === detailsData.address &&
      authUserDetails.phone === detailsData.phone &&
      authUserDetails.name === detailsData.name
    ) {
      dispatch(
        setNotification({
          text: 'Ni jedno polje nije izmenjeno!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }

    if (Object.values(detailsData).includes('')) {
      dispatch(
        setNotification({
          text: 'Sva polja moraju biti popunjena!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    if (isUsernameTaken && detailsData.username !== authUsername) {
      dispatch(
        setNotification({
          text: 'Korisničko ime je zauzeto!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    dispatch(
      updateUser({
        username: authUsername,
        updatedAttributes: { ...detailsData },
      }),
    )
    if (authUsername !== detailsData.username) {
      dispatch(signIn({ username: detailsData.username }))
    }
    dispatch(
      setNotification({
        text: `Podaci korisnika ${detailsData.username} su uspešno ažurirani.`,
        type: NotificationTypeSuccess,
      }),
    )
  }

  return (
    <UserStyledCenterBackgroundContainer>
      <Card
        variant='outlined'
        sx={{
          maxWidth: 310,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '1.5%',
        }}
      >
        <CardContent sx={UserCartContextAndActionStyles}>
          <Root>
            <Typography variant='h5'>DETALJI KORISNIKA</Typography>
          </Root>
          <NameSurnameContainer>
            <TextFieldStyled
              sx={UserNameAndSurnameFieldStyles}
              id='name'
              label='Ime'
              value={detailsData.name}
              onChange={handleChange('name')}
            />
            <TextFieldStyled
              sx={UserNameAndSurnameFieldStyles}
              id='surname'
              label='Prezime'
              value={detailsData.surname}
              onChange={handleChange('surname')}
            />
          </NameSurnameContainer>
          <TextFieldStyled
            sx={UserFormFieldStyles}
            id='address'
            label='Adresa'
            value={detailsData.address}
            onChange={handleChange('address')}
          />
          <TextFieldStyled
            sx={UserFormFieldStyles}
            id='phone'
            label='Telefon'
            value={detailsData.phone}
            onChange={handleChange('phone')}
          />
          <TextFieldStyled
            sx={UserFormFieldStyles}
            id='username'
            label='Korisničko ime'
            value={detailsData.username}
            onChange={handleChange('username')}
          />
        </CardContent>
        <CardActions sx={UserCartContextAndActionStyles}>
          <Button ref={detailsButtonRef} sx={UserFormButtonStyles} onClick={handleSavechanges}>
            SAČUVAJ IZMENE
          </Button>
        </CardActions>
      </Card>
    </UserStyledCenterBackgroundContainer>
  )
}

export default Details
