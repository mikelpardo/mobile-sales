import React from 'react'
import { Text } from 'ui/components/Text/Text'
import { MobileInfoWrapper } from 'ui/views/MobileDetail/_components/MobileInfo/MobileInfo.styles'
import PropTypes from 'prop-types'

export const MobileInfo = ({ mobileDetail }) => {
  const getCamerasInfo = () => `Primary ${mobileDetail.primaryCamera} Secondary ${mobileDetail.secondaryCmera}`

  return (
    <MobileInfoWrapper>
      <Text>{mobileDetail.brand}</Text>
      <Text>{mobileDetail.model}</Text>
      <Text>{mobileDetail.price}</Text>
      <Text>{mobileDetail.cpu}</Text>
      <Text>{mobileDetail.ram}</Text>
      <Text>{mobileDetail.os}</Text>
      <Text>{mobileDetail.displayResolution}</Text>
      <Text>{mobileDetail.battery}</Text>
      <Text>{getCamerasInfo()}</Text>
      <Text>{mobileDetail.dimentions}</Text>
      <Text>{mobileDetail.weight}</Text>
    </MobileInfoWrapper>
  )
}

MobileInfo.propTypes = {
  mobileDetail: PropTypes.object
}
