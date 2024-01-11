import { useLocation } from 'react-router-dom'
import { Product } from '../../../features/products/products.interfaces'
import { StyledCenterBackgroundContainerVerticaly } from '../../../styles/users'
import { Card, Typography } from '@mui/material'
import {
  FormSmallButtonStyled,
  FormSmallTextFieldStyled,
  FormTextFieldStyled,
  RootRowFlexDirectionStyle,
} from '../../../styles/common'
import { ChangeEvent, useState } from 'react'
import { WhiteTeamColor } from '../../../constants/common'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../../constants/notification'
import { useAppDispatch } from '../../../app/hooks'
import { BasketItem } from '../../../features/basket/basket.interfaces'
import { addItemToBasket } from '../../../features/basket/basket.slice'

const ProductDetails = () => {
  const location = useLocation()
  const productData: Product = location.state as Product

  const [amount, setAmount] = useState<number>(0)
  const [comment, setComment] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement | { value: unknown }>) => {
    setAmount(Number(event.target.value))
  }

  const handleChangeComment = (event: ChangeEvent<HTMLInputElement | { value: unknown }>) => {
    setComment(String(event.target.value))
  }

  const handleAddingProductIntoBasket = () => {
    if (amount <= 0) {
      dispatch(
        setNotification({
          text: 'Da bi ste dodali proizvod u korpu količina ne sme manja ili jednaka 0!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    dispatch(addItemToBasket({ productId: productData.id, amount } as BasketItem))
    dispatch(
      setNotification({
        text: `Proizvod ${productData.name} je uspešno dodat u korpu`,
        type: NotificationTypeSuccess,
      }),
    )
    return
  }

  return (
    <StyledCenterBackgroundContainerVerticaly>
      <Card
        variant='outlined'
        sx={{
          width: 400,
          height: 270,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '1.5%',
        }}
      >
        <RootRowFlexDirectionStyle>
          <img style={{ marginLeft: 15 }} src={productData.pic} alt={`Product pic ${productData.id}`} height='140px' />
          <div>
            <Typography style={{ marginBottom: 15 }} variant='h5'>
              {productData.name}
            </Typography>
            <Typography variant='body1'>{`Opis: ${productData.description}`}</Typography>
            <Typography variant='body1'>{`Cena: ${productData.price} RSD`}</Typography>
          </div>
        </RootRowFlexDirectionStyle>
        <div style={{ marginLeft: 15, marginTop: 15 }}>
          <Typography variant='body1'>{`Sastav: ${productData.ingredients}`}</Typography>
        </div>
        <RootRowFlexDirectionStyle>
          <FormSmallTextFieldStyled
            sx={{ m: 1 }}
            id='amount'
            label='Količina'
            type='number'
            value={amount}
            onChange={handleChangeAmount}
          />
          <FormSmallButtonStyled sx={{ mt: 3 }} onClick={handleAddingProductIntoBasket}>
            Dodaj u korpu
          </FormSmallButtonStyled>
        </RootRowFlexDirectionStyle>
      </Card>
      <FormTextFieldStyled
        sx={{ m: 1, backgroundColor: WhiteTeamColor }}
        id='comment'
        label='Komentar'
        value={comment}
        onChange={handleChangeComment}
      />
    </StyledCenterBackgroundContainerVerticaly>
  )
}

export default ProductDetails
