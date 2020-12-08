import React from 'react'
import { Text } from 'ui/components/Text/Text'
import { MobileInfoWrapper, StyledMobileInfo } from 'ui/views/MobileDetail/_components/MobileInfo/MobileInfo.styles'
import PropTypes from 'prop-types'
import { sizes } from 'ui/theme/sizes'

export const MobileInfo = ({ mobileDetail }) => {
  const getCamerasInfo = () => `Primary ${mobileDetail.primaryCamera} Secondary ${mobileDetail.secondaryCmera}`

  return (
    <MobileInfoWrapper>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Brand:
        </Text>
        <Text>{mobileDetail.brand}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Model:
        </Text>
        <Text>{mobileDetail.model}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Price:
        </Text>
        <Text>{mobileDetail.price}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          CPU:
        </Text>
        <Text>{mobileDetail.cpu}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          RAM:
        </Text>
        <Text>{mobileDetail.ram}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          OS:
        </Text>
        <Text>{mobileDetail.os}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Resolution:
        </Text>
        <Text>{mobileDetail.displayResolution}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Battery:
        </Text>
        <Text>{mobileDetail.battery}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Cameras:
        </Text>
        <Text>{getCamerasInfo()}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Dimensions:
        </Text>
        <Text>{mobileDetail.dimentions}</Text>
      </StyledMobileInfo>
      <StyledMobileInfo>
        <Text isBold={true} marginRight={sizes.tiny}>
          Weight:
        </Text>
        <Text>{mobileDetail.weight}</Text>
      </StyledMobileInfo>
    </MobileInfoWrapper>
  )
}

MobileInfo.propTypes = {
  mobileDetail: PropTypes.object
}
