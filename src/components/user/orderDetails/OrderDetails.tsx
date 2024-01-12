import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectAuthAttributeByKey } from '../../../features/auth/auth.selectors'
import { Order, OrderType } from '../../../features/orders/orders.interfaces'
import { selectOrdersById } from '../../../features/orders/orders.slelectors'
import {
  StyledCenterBackgroundContainerVerticalyColumn,
  StyledCenterBackgroundContainerVerticalyRow,
} from '../../../styles/users'
import {
  ActionButtonStyled,
  RootNotCentered,
  RootRowFlexDirectionStyle,
  RootRowFlexDirectionStyleCenter,
} from '../../../styles/common'
import { WhiteTeamColor } from '../../../constants/common'
import { Card, Typography } from '@mui/material'
import { getOrderStatusText } from '../../../helpers/orders'
import { UserTypeWorker } from '../../../constants/user'
import { changeOrderStatus } from '../../../features/orders/orders.slice'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess } from '../../../constants/notification'

const OrderDetails = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const orderDetails: Order = useAppSelector(selectOrdersById({ id: Number(id) })) as Order
  const areActionsVisible =
    useAppSelector(selectAuthAttributeByKey('type')) === UserTypeWorker && orderDetails.status === 'waiting'

  const handleChangeOrderStatus = (status: OrderType) => {
    dispatch(changeOrderStatus({ orderId: orderDetails.id, newStatus: status }))
    dispatch(
      setNotification({
        text: `Promenjen status narudžbine ${orderDetails.id} u ${getOrderStatusText(status)}`,
        type: NotificationTypeSuccess,
      }),
    )
  }

  return (
    <StyledCenterBackgroundContainerVerticalyRow>
      <div
        style={{
          width: '50%',
          paddingLeft: '5%',
          paddingTop: '3%',
        }}
      >
        <Card
          style={{
            width: '50%',
            marginLeft: '4%',
            marginBottom: '1%',
            paddingLeft: '2%',
            height: areActionsVisible ? 180 : 140,
          }}
        >
          <Typography variant='h6'>{`Narudžbina: ${orderDetails.id}`}</Typography>
          <Typography variant='h6'>{`Kupac: ${orderDetails.id}`}</Typography>
          <Typography variant='h6'>{`Ukupno: ${orderDetails.orderTotalPrice} RSD`}</Typography>
          <Typography variant='h6'>{`Status: ${getOrderStatusText(orderDetails.status)}`}</Typography>
          <RootNotCentered>
            <RootRowFlexDirectionStyle sx={{ display: areActionsVisible ? '' : 'none' }}>
              <ActionButtonStyled
                sx={{ m: 1 }}
                onClick={() => {
                  handleChangeOrderStatus('accepted')
                }}
              >
                Prihvati
              </ActionButtonStyled>
              <ActionButtonStyled
                sx={{ m: 1 }}
                onClick={() => {
                  handleChangeOrderStatus('denied')
                }}
              >
                Odbij
              </ActionButtonStyled>
            </RootRowFlexDirectionStyle>
          </RootNotCentered>
        </Card>
      </div>
      <StyledCenterBackgroundContainerVerticalyColumn style={{ width: '55%', paddingRight: '1%' }}>
        <RootRowFlexDirectionStyleCenter style={{ paddingLeft: '20%' }}>
          <Typography style={{ color: WhiteTeamColor }} variant='h6'>
            Proizvod
          </Typography>
          <Typography style={{ color: WhiteTeamColor }} variant='h6'>
            Količina
          </Typography>
          <Typography style={{ color: WhiteTeamColor }} variant='h6'>
            Cena jednog artikla
          </Typography>
        </RootRowFlexDirectionStyleCenter>
        {orderDetails.products.map((product, index) => (
          <Card
            key={index}
            sx={{
              width: '100%',
              height: 90,
              m: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pl: 2,
              gap: 10,
            }}
          >
            <img
              src={product.productPic}
              alt={`Picture ${product.productName}`}
              height='60px'
              width='80px'
              style={{ float: 'left', marginLeft: '-10px' }}
            />
            <Typography variant='h6'>{product.productName}</Typography>
            <Typography variant='h6'>{product.amount}</Typography>
            <Typography variant='h6'>{product.priceOfSingleItem}</Typography>
          </Card>
        ))}
      </StyledCenterBackgroundContainerVerticalyColumn>
    </StyledCenterBackgroundContainerVerticalyRow>
  )
}

export default OrderDetails
