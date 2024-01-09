import { Button, Card, CardActions, CardContent, SelectChangeEvent, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectUserProperty } from '../../../features/users/users.selectors'
import { Root, TextFieldStyled } from '../../../styles/common'
import { UserCartContextAndActionStyles, UserFormButtonStyles, UserFormFieldStyles } from '../../../constants/users'
import { UserStyledCenterBackgroundContainer } from '../../../styles/users'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ChangePasswordProps } from '../../../interfaces/users'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../../constants/notifications'
import { updateUser } from '../../../features/users/users.slice'
import { selectAuthKey } from '../../../features/auth/auth.selectors'

const ChangePassword = () => {
  const authUsername = useAppSelector(selectAuthKey('username'))
  const authUserPassword = useAppSelector(selectUserProperty({ username: authUsername, key: 'password' }))
  const [changePasswordData, setChangePasswordData] = useState<ChangePasswordProps>({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const dispatch = useAppDispatch()
  const changePasswordButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (changePasswordButtonRef.current) {
      changePasswordButtonRef.current.focus()
    }
  }, [])

  const handleChange =
    (field: keyof typeof changePasswordData) =>
    (event: SelectChangeEvent<unknown> | ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setChangePasswordData({ ...changePasswordData, [field]: event.target.value as string })
    }

  const handleChangePassword = () => {
    if (Object.values(changePasswordData).includes('')) {
      dispatch(
        setNotification({
          text: 'Sva polja moraju biti popunjena!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }

    if (authUserPassword !== changePasswordData.oldPassword) {
      dispatch(
        setNotification({
          text: 'Stara lozinka je netačna!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }

    if (changePasswordData.newPassword === changePasswordData.oldPassword) {
      dispatch(
        setNotification({
          text: 'Nova lozinka je ista kao i stara!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    if (changePasswordData.newPassword !== changePasswordData.confirmNewPassword) {
      dispatch(
        setNotification({
          text: 'Nova lozinka i potvrda lozinke se razlikuju!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    dispatch(
      updateUser({
        username: authUsername,
        updatedAttributes: { password: changePasswordData.newPassword },
      }),
    )
    dispatch(
      setNotification({
        text: 'Lozinka je uspešno ažurirana',
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
          maxHeight: 635,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '1.5%',
        }}
      >
        <CardContent sx={UserCartContextAndActionStyles}>
          <Root>
            <Typography variant='h5'>PROMENA LOZINKE</Typography>
          </Root>
          <TextFieldStyled
            value={changePasswordData.oldPassword}
            onChange={handleChange('oldPassword')}
            sx={UserFormFieldStyles}
            id='old-password'
            label='Stara lozinka'
            type='password'
          />
          <TextFieldStyled
            value={changePasswordData.newPassword}
            onChange={handleChange('newPassword')}
            sx={UserFormFieldStyles}
            id='new-password'
            label='Nova lozinka'
            type='password'
          />
          <TextFieldStyled
            value={changePasswordData.confirmNewPassword}
            onChange={handleChange('confirmNewPassword')}
            sx={UserFormFieldStyles}
            id='confirm-new-password'
            label='Potvrda nove lozinke'
            type='password'
          />
        </CardContent>
        <CardActions sx={UserCartContextAndActionStyles}>
          <Button onClick={handleChangePassword} ref={changePasswordButtonRef} sx={UserFormButtonStyles}>
            Izmeni lozinku
          </Button>
        </CardActions>
      </Card>
    </UserStyledCenterBackgroundContainer>
  )
}

export default ChangePassword
