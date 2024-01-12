import styled from 'styled-components'

export const StyledCenterBackgroundContainerVerticalyColumn = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '1%',
  marginBottom: '1%',
  minHeight: '80%',
}))

export const StyledCenterBackgroundContainerVerticalyRow = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '1%',
  marginBottom: '1%',
}))
