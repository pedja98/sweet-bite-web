import { Button, CardActions } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AddProductsFormCartActionStyled = styled(CardActions)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const ProductActionButtonStyled = styled(Button)(() => ({
  margin: '30',
  padding: '10',
  minWidth: 120,
  height: 35,
}))
