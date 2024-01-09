import styled from 'styled-components'
import { WhiteTeamColor } from '../constants/common'

export const FooterRoot = styled('div')(() => ({
  backgroundColor: WhiteTeamColor,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '6px',
  boxSizing: 'border-box',
  marginTop: 'auto',
}))

export const FooterRootElement = styled('div')(() => ({
  backgroundColor: WhiteTeamColor,
  display: 'flex',
  flexDirection: 'row',
  '& > *:not(:last-child)': {
    marginRight: '-30px',
  },
}))

export const FooterLocationElement = styled('div')(() => ({
  height: '100%',
  width: 250,
  textAlign: 'left',
  backgroundColor: WhiteTeamColor,
  marginLeft: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
}))

export const FooterSocialMediaAndAuthorElement = styled('div')(() => ({
  backgroundColor: WhiteTeamColor,
  display: 'flex',
  flexDirection: 'column',
}))
