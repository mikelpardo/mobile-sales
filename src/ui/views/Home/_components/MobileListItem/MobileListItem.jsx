import React from 'react'
import { Text } from 'ui/components/Text/Text'
import {
  MobileDataWrapper,
  MobileListItemWrapper,
  StyledImg,
  StyledMobileListItem
} from 'ui/views/Home/_components/MobileListItem/MobileListItem'
import PropTypes from 'prop-types'

export const MobileListItem = ({ mobile }) => {
  return (
    <MobileListItemWrapper>
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
