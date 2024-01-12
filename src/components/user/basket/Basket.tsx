import { Card, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectAuthAttributeByKey } from '../../../features/auth/auth.selectors'
import { selectBasketForCurrentUser } from '../../../features/basket/basket.slelectors'
import {
  ActionButtonBigStyled,
  ActionButtonStyled,
  Root,
  RootRowFlexDirectionStyleCenter,
} from '../../../styles/common'
import {
  StyledCenterBackgroundContainerVerticalyColumn,
  StyledCenterBackgroundContainerVerticalyRow,
} from '../../../styles/users'
import { PrimaryThemeColor, WhiteTeamColor } from '../../../constants/common'
import { emptyBasket, removeBasketItem } from '../../../features/basket/basket.slice'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess } from '../../../constants/notification'
import { createOrder } from '../../../features/orders/orders.slice'
import { Order, OrderProduct } from '../../../features/orders/orders.interfaces'
import { useNavigate } from 'react-router-dom'

const Basket = () => {
  const dispatch = useAppDispatch()
  const authUsername = useAppSelector(selectAuthAttributeByKey('username'))
  const basketItems = useAppSelector(selectBasketForCurrentUser({ username: authUsername }))
  const navigate = useNavigate()

  if (basketItems.length === 0) {
    return (
      <Root>
        <Typography style={{ color: WhiteTeamColor }} variant='h1'>
          Korpa je prazna
        </Typography>
      </Root>
    )
  }
  let totalPrice = 0
  basketItems.forEach((basketItem) => {
    totalPrice += basketItem.amount * basketItem.priceOfSingleItem
  })

  const handleRemoveBasketItem = (id: number) => {
    dispatch(removeBasketItem(id))
    dispatch(
      setNotification({
        text: `Proizvod uspešno uklonjen iz korpe`,
        type: NotificationTypeSuccess,
      }),
    )
  }

  const handleCreateOrder = () => {
    const orderProducts: OrderProduct[] = []
    basketItems.forEach((basketItem) => {
      orderProducts.push({
        productPic: basketItem.productPic,
        productName: basketItem.productName,
        priceOfSingleItem: basketItem.priceOfSingleItem,
        amount: basketItem.amount,
      })
    })
    dispatch(createOrder({ orderTotalPrice: totalPrice, username: authUsername, products: orderProducts } as Order))
    dispatch(
      setNotification({
        text: `Nova naružbina je uspešno kreirana`,
        type: NotificationTypeSuccess,
      }),
    )
    dispatch(emptyBasket())
    navigate('/user/my-orders')
  }

  return (
    <StyledCenterBackgroundContainerVerticalyRow>
      <StyledCenterBackgroundContainerVerticalyColumn style={{ width: '55%' }}>
        <RootRowFlexDirectionStyleCenter>
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
        {basketItems.map((basketItem, index) => (
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
              src={basketItem.productPic}
              alt={`Picture ${basketItem.id}`}
              height='60px'
              width='80px'
              style={{ float: 'left', marginLeft: '-10px' }}
            />
            <Typography variant='h6'>{basketItem.productName}</Typography>
            <Typography variant='h6'>{basketItem.amount}</Typography>
            <Typography variant='h6'>{basketItem.priceOfSingleItem}</Typography>
            <ActionButtonStyled
              onClick={() => {
                handleRemoveBasketItem(basketItem.id)
              }}
            >
              Izbaci
            </ActionButtonStyled>
          </Card>
        ))}
      </StyledCenterBackgroundContainerVerticalyColumn>
      <div
        style={{
          width: '20%',
          marginTop: '1%',
          marginBottom: '1%',
          paddingLeft: '5%',
          paddingTop: '2%',
        }}
      >
        <div
          style={{
            width: '100%',
            marginTop: '1%',
            marginBottom: '1%',
          }}
        >
          <Typography style={{ color: WhiteTeamColor }} variant='h6'>
            {`Ukupno: ${totalPrice} RSD`}
          </Typography>
          <ActionButtonBigStyled
            onClick={handleCreateOrder}
            style={{ backgroundColor: WhiteTeamColor, color: PrimaryThemeColor }}
          >
            Kreiraj narudzbinu
          </ActionButtonBigStyled>
        </div>
      </div>
    </StyledCenterBackgroundContainerVerticalyRow>
  )
}

export default Basket
