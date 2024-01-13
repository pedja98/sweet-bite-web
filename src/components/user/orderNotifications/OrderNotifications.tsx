import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../../app/store'
import { selectOrderNotificationsForUsername } from '../../../features/orders/orders.slelectors'
import { StyledCenterBackgroundContainerVerticalyColumn } from '../../../styles/users'
import { Root } from '../../../styles/common'
import { Card, Typography } from '@mui/material'
import { SelectedItemColor, WhiteTeamColor } from '../../../constants/common'
import { readNotifications } from '../../../features/orders/orders.slice'
import { OrderNotificationsProps } from '../../../interfaces/orderNotifications'

class OrderNotifications extends Component<OrderNotificationsProps> {
  componentWillUnmount() {
    const { authUsername } = this.props
    this.props.readNotifications({ username: authUsername })
  }

  render() {
    const { notifications } = this.props
    return (
      <StyledCenterBackgroundContainerVerticalyColumn>
        <Root
          style={{ width: '55%', marginTop: 3, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 0 }}
        >
          {notifications.map((notification, index) => (
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
                backgroundColor: notification.read ? WhiteTeamColor : SelectedItemColor,
              }}
              key={index}
            >
              <Typography variant='h6'>{notification.text}</Typography>
            </Card>
          ))}
        </Root>
      </StyledCenterBackgroundContainerVerticalyColumn>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  notifications: selectOrderNotificationsForUsername({ username: state.auth.username })(state),
  authUsername: state.auth.username,
})

const mapDispatchToProps = { readNotifications }

export default connect(mapStateToProps, mapDispatchToProps)(OrderNotifications)
