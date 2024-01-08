import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { removeNotification } from '../../features/notifications/notifications.slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectNotifications } from '../../features/notifications/notifications.selectors'

/**
 * Connection of notistack to global app state
 */
const Notification = () => {
  const notifications = useAppSelector(selectNotifications)
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    notifications.forEach(({ key, text, type }) => {
      enqueueSnackbar(text, {
        variant: type,
        preventDuplicate: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      })
      dispatch(removeNotification(key))
    })
  }, [notifications, enqueueSnackbar, dispatch])

  return null
}

export default Notification
