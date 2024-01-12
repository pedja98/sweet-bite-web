import { useParams } from 'react-router-dom'
import { Product } from '../../../features/products/products.interfaces'
import { StyledCenterBackgroundContainerVerticalyColumn } from '../../../styles/users'
import { Card, Typography } from '@mui/material'
import {
  ActionButtonStyled,
  FormBigTextFieldStyled,
  FormSmallButtonStyled,
  FormSmallTextFieldStyled,
  RootColumnFlexDirectionStyle,
  RootNotCentered,
  RootRowFlexDirectionStyle,
} from '../../../styles/common'
import { ChangeEvent, useState } from 'react'
import { QuaternaryColor, WhiteTeamColor } from '../../../constants/common'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../../constants/notification'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { BasketItem } from '../../../features/basket/basket.interfaces'
import { addItemToBasket } from '../../../features/basket/basket.slice'
import { selectProductById } from '../../../features/products/products.slelectors'
import { addCommentToProduct } from '../../../features/products/products.slice'
import { selectAuthAttributeByKey } from '../../../features/auth/auth.selectors'
import { UserTypeKupac } from '../../../constants/user'

const ProductDetails = () => {
  const { id } = useParams()
  const areActionsVisible = useAppSelector(selectAuthAttributeByKey('type')) === UserTypeKupac
  const currentUserUsername = useAppSelector(selectAuthAttributeByKey('username'))

  const productData: Product | undefined = useAppSelector(
    selectProductById({ id: !isNaN(Number(id)) ? Number(id) : -1 }),
  )

  if (!productData) {
    return <></>
  }

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

    dispatch(
      addItemToBasket({
        productPic: productData.pic,
        productName: productData.name,
        priceOfSingleItem: productData.price,
        amount,
        basketItemOwner: currentUserUsername,
      } as BasketItem),
    )
    dispatch(
      setNotification({
        text: `Proizvod ${productData.name} je uspešno dodat u korpu`,
        type: NotificationTypeSuccess,
      }),
    )
    return
  }

  const handleAddCommentToProduct = () => {
    if (comment === '') {
      dispatch(
        setNotification({
          text: 'Polje za komentar je prazno!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    dispatch(addCommentToProduct({ productId: productData.id, comment }))
  }

  return (
    <StyledCenterBackgroundContainerVerticalyColumn>
      <Card
        variant='outlined'
        sx={{
          width: 400,
          height: areActionsVisible ? 270 : 220,
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
        <RootRowFlexDirectionStyle sx={{ display: areActionsVisible ? '' : 'none' }}>
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
      <RootNotCentered>
        <RootRowFlexDirectionStyle sx={{ display: areActionsVisible ? '' : 'none' }}>
          <FormBigTextFieldStyled
            sx={{ m: 3, backgroundColor: WhiteTeamColor }}
            id='comment'
            label='Komentar'
            value={comment}
            onChange={handleChangeComment}
          />
          <ActionButtonStyled sx={{ m: 3, backgroundColor: QuaternaryColor }} onClick={handleAddCommentToProduct}>
            Pošalji
          </ActionButtonStyled>
        </RootRowFlexDirectionStyle>
        <RootColumnFlexDirectionStyle sx={{ mt: 2 }}>
          {productData.comments.map((comment, index) => (
            <Card key={index} sx={{ width: '50%', height: 45, ml: 3, display: 'flex', alignItems: 'center', pl: 2 }}>
              <Typography variant='h6'>{comment}</Typography>
            </Card>
          ))}
        </RootColumnFlexDirectionStyle>
      </RootNotCentered>
    </StyledCenterBackgroundContainerVerticalyColumn>
  )
}

export default ProductDetails
