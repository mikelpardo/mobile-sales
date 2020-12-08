import React from 'react'
import { Text } from 'ui/components/Text/Text'
import {
  MobileDataWrapper,
  MobileListItemWrapper,
  StyledImg,
  StyledMobileListItem
} from 'ui/views/Home/_components/MobileListItem/MobileListItem'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'

export const MobileListItem = ({ mobile }) => {
  const history = useHistory()

  const redirectToDetail = () => history.push(routeProvider.mobileDetail.historyPath(mobile.id))

  return (
    <MobileListItemWrapper onClick={() => redirectToDetail()}>
      <StyledMobileListItem>
        <StyledImg src={mobile.imgUrl} />
        <MobileDataWrapper>
          <Text>{mobile.brand}</Text>
          <Text>{mobile.model}</Text>
          <Text>{mobile.price}</Text>
        </MobileDataWrapper>
      </StyledMobileListItem>
    </MobileListItemWrapper>
  )
}

MobileListItem.propTypes = {
  mobile: PropTypes.object.isRequired
}
