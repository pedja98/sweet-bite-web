import { ChangeEvent, useState } from 'react'
import { Card, InputLabel, SelectChangeEvent, Typography } from '@mui/material'
import { StyledCenterBackgroundContainerVerticalyColumn } from '../../../styles/users'
import {
  FormCartContextStyled,
  FormControlStyled,
  FormTextFieldStyled,
  MenuItemStyled,
  Root,
  SelectStyled,
} from '../../../styles/common'
import { AddProductsFormCartActionStyled, ProductActionButtonStyled } from '../../../styles/produscts'
import { useAppDispatch } from '../../../app/hooks'
import { setNotification } from '../../../features/notifications/notifications.slice'
import { NotificationTypeSuccess, NotificationTypeWarning } from '../../../constants/notification'
import { addProduct } from '../../../features/products/products.slice'
import { AddProductProps } from '../../../features/products/products.types'

const AddProduct = () => {
  const [showChoosePicture, setShowChoosePicture] = useState<boolean>(false)
  const [productData, setProductData] = useState<AddProductProps>({
    name: '',
    description: '',
    price: 0,
    type: 'kolač',
    ingredients: '',
    pic: '/products/Cake1.jpg',
  })

  const dispatch = useAppDispatch()

  const handleShowChoosePicture = () => {
    setShowChoosePicture(true)
  }

  const handleAddProduct = () => {
    if (productData.pic === '') {
      dispatch(
        setNotification({
          text: 'Niste dodali sliku!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    if (Object.values(productData).includes('') || Object.values(productData).includes(0)) {
      dispatch(
        setNotification({
          text: 'Sva polja moraju biti popunjena!',
          type: NotificationTypeWarning,
        }),
      )
      return
    }
    dispatch(addProduct(productData))
    dispatch(
      setNotification({
        text: 'Dodali ste novi proizvod!',
        type: NotificationTypeSuccess,
      }),
    )
  }
  const handleChange =
    (field: keyof typeof productData) =>
    (event: SelectChangeEvent<unknown> | ChangeEvent<HTMLInputElement | { value: unknown }>) => {
      setProductData({ ...productData, [field]: event.target.value as string })
    }

  const handleSetPicture = (picturePath: string) => {
    setProductData({ ...productData, pic: picturePath })
    setShowChoosePicture(false)
    dispatch(
      setNotification({
        text: 'Dodali ste sliku!',
        type: NotificationTypeSuccess,
      }),
    )
  }

  return (
    <StyledCenterBackgroundContainerVerticalyColumn style={{ position: 'relative' }}>
      <Card
        variant='outlined'
        sx={{
          maxWidth: 310,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '1.5%',
        }}
      >
        <FormCartContextStyled>
          <Root>
            <Typography variant='h5'>Dodaj proizvod</Typography>
          </Root>
          <FormTextFieldStyled
            id='name'
            label='Naziv'
            value={productData.name}
            onChange={handleChange('name')}
            sx={{ m: 1 }}
          />
          <FormTextFieldStyled
            id='price'
            label='Cena'
            value={productData.price}
            onChange={handleChange('price')}
            sx={{ m: 1 }}
          />
          <FormTextFieldStyled
            id='description'
            label='Opis'
            value={productData.description}
            onChange={handleChange('description')}
            sx={{ m: 1 }}
          />
          <FormTextFieldStyled
            id='ingredients'
            label='Sastav'
            value={productData.ingredients}
            onChange={handleChange('ingredients')}
            sx={{ m: 1 }}
          />
          <FormControlStyled size='small' sx={{ mt: 2 }}>
            <InputLabel id='type'>Tip proizvoda</InputLabel>
            <SelectStyled
              labelId='type'
              id='type'
              label='Type'
              value={productData.type}
              onChange={handleChange('type')}
            >
              <MenuItemStyled value={'kolač'}>Kolač</MenuItemStyled>
              <MenuItemStyled value={'torta'}>Torta</MenuItemStyled>
            </SelectStyled>
          </FormControlStyled>
        </FormCartContextStyled>
        <AddProductsFormCartActionStyled>
          <ProductActionButtonStyled onClick={handleShowChoosePicture} sx={{ m: 1, fontSize: '12px' }}>
            Dodaj sliku
          </ProductActionButtonStyled>
          <ProductActionButtonStyled onClick={handleAddProduct} sx={{ m: 1, fontSize: '12px' }}>
            Dodaj proizvod
          </ProductActionButtonStyled>
        </AddProductsFormCartActionStyled>
      </Card>
      <Card
        sx={{ p: 1 }}
        style={{
          display: showChoosePicture ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          left: 275,
        }}
      >
        <img
          style={{ marginLeft: 15 }}
          src='/products/Cake1.jpg'
          alt={'product picture 1'}
          height='70px'
          width='80px'
          onClick={() => {
            handleSetPicture('/products/Cake1.jpg')
          }}
        />
        <img
          style={{ marginLeft: 15 }}
          src='/products/Cookie1.jpg'
          alt={'product picture 2'}
          height='70px'
          width='80px'
          onClick={() => {
            handleSetPicture('/products/Cookie1.jpg')
          }}
        />
      </Card>
    </StyledCenterBackgroundContainerVerticalyColumn>
  )
}

export default AddProduct
