import React from 'react'
import { Text } from 'ui/components/Text/Text'
import {
  MobileDataWrapper,
  MobileListItemWrapper,
  StyledImg,
  StyledMobileInformation,
  StyledMobileListItem
} from 'ui/views/Home/_components/MobileListItem/MobileListItem'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'
import { sizes } from 'ui/theme/sizes'

export const MobileListItem = ({ mobile }) => {
  const history = useHistory()

  const redirectToDetail = () => history.push(routeProvider.mobileDetail.historyPath(mobile.id))

  return (
    <MobileListItemWrapper onClick={() => redirectToDetail()}>
      <StyledMobileListItem>
        <StyledImg src={mobile.imgUrl} />
        <MobileDataWrapper>
          <StyledMobileInformation>
            <Text isBold={true} marginRight={sizes.tiny}>
              Brand:
            </Text>
            <Text>{mobile.brand}</Text>
          </StyledMobileInformation>
          <StyledMobileInformation>
            <Text isBold={true} marginRight={sizes.tiny}>
              Model:
            </Text>
            <Text>{mobile.model}</Text>
          </StyledMobileInformation>
          <StyledMobileInformation>
            <Text isBold={true} marginRight={sizes.tiny}>
              Price:
            </Text>
            <Text>{`${mobile.price} €`}</Text>
          </StyledMobileInformation>
        </MobileDataWrapper>
      </StyledMobileListItem>
    </MobileListItemWrapper>
  )
}

MobileListItem.propTypes = {
  mobile: PropTypes.object.isRequired
}
