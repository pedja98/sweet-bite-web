import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { selectAuthAttributeByKey } from '../../../features/auth/auth.selectors'
import { selectAllOrders, selectOrdersByUsername } from '../../../features/orders/orders.slelectors'
import { UserTypeBuyer } from '../../../constants/user'
import { Order } from '../../../features/orders/orders.interfaces'
import { Card, Typography } from '@mui/material'
import { getOrderStatusText } from '../../../helpers/orders'
import { ActionButtonStyled, Root } from '../../../styles/common'
import { QuaternaryColor, WhiteTeamColor } from '../../../constants/common'
import { StyledCenterBackgroundContainerVerticalyColumn } from '../../../styles/users'

const Orders = () => {
  const authUsername = useAppSelector(selectAuthAttributeByKey('username'))
  const authType = useAppSelector(selectAuthAttributeByKey('type'))
  const navigate = useNavigate()
  let orders: Order[] =
    authType === UserTypeBuyer
      ? (useAppSelector(selectOrdersByUsername({ username: authUsername })) as Order[])
      : useAppSelector(selectAllOrders)
  orders = [...orders].reverse()
  if (orders.length === 0) {
    return (
      <Root>
        <Typography style={{ color: WhiteTeamColor }} variant='h1'>
          Nema narudžbina
        </Typography>
      </Root>
    )
  }
  return (
    <StyledCenterBackgroundContainerVerticalyColumn>
      <Root style={{ width: '55%', marginTop: 3, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 0 }}>
        {orders.map((order) => (
          <Card
            sx={{
              width: '300px',
              height: 50,
              m: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pl: 2,
              gap: 2,
            }}
            key={order.id}
          >
            <Typography variant='h6'>{order.id}</Typography>
            <Typography variant='h6'>{getOrderStatusText(order.status)}</Typography>
            <ActionButtonStyled
              onClick={() => {
                navigate(`/user/order/${order.id}`)
              }}
              style={{ backgroundColor: QuaternaryColor }}
            >
              Detalji
            </ActionButtonStyled>
          </Card>
        ))}
      </Root>
    </StyledCenterBackgroundContainerVerticalyColumn>
  )
}

export default Orders
