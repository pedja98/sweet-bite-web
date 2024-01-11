import { Card, SelectChangeEvent, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectUserProperty } from '../../../features/users/users.selectors'
import {
  FormButtonStyled,
  FormCartActionStyled,
  FormCartContextStyled,
  FormTextFieldStyled,
  Root,
} from '../../../styles/common'
import { StyledCenterBackgroundContainerVerticaly } from '../../../styles/users'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ChangePasswordProps } from '../../../interfaces/users'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../../constants/notification'
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
    <StyledCenterBackgroundContainerVerticaly>
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
        <FormCartContextStyled>
          <Root>
            <Typography variant='h5'>PROMENA LOZINKE</Typography>
          </Root>
          <FormTextFieldStyled
            value={changePasswordData.oldPassword}
            onChange={handleChange('oldPassword')}
            id='old-password'
            label='Stara lozinka'
            type='password'
            sx={{ m: 1 }}
          />
          <FormTextFieldStyled
            value={changePasswordData.newPassword}
            onChange={handleChange('newPassword')}
            id='new-password'
            label='Nova lozinka'
            type='password'
            sx={{ m: 1 }}
          />
          <FormTextFieldStyled
            value={changePasswordData.confirmNewPassword}
            onChange={handleChange('confirmNewPassword')}
            id='confirm-new-password'
            label='Potvrda nove lozinke'
            type='password'
            sx={{ m: 1 }}
          />
        </FormCartContextStyled>
        <FormCartActionStyled>
          <FormButtonStyled sx={{ m: 1 }} onClick={handleChangePassword} ref={changePasswordButtonRef}>
            Izmeni lozinku
          </FormButtonStyled>
        </FormCartActionStyled>
      </Card>
    </StyledCenterBackgroundContainerVerticaly>
  )
}

export default ChangePassword
