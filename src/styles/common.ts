import { styled } from '@mui/material/styles'
import { FONT_COLOR, PRIMARY_COLOR } from '../theme/sweetBiteTheme'

export const BackGroundDiv = styled('div')(() => ({
    backgroundColor: PRIMARY_COLOR,
    width: '100vw',
    height: '100vh',
    color: FONT_COLOR,
}))
