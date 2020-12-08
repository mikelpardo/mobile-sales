import React from 'react'
import { StyledImage, MobileInfoWrapper, MobileDetailWrapper } from 'ui/views/MobileDetail/MobileDetail.styles'
import { AddCartInfo } from 'ui/views/MobileDetail/_components/AddCartInfo/AddCartInfo'
import { MobileInfo } from 'ui/views/MobileDetail/_components/MobileInfo/MobileInfo'
import PropTypes from 'prop-types'

export const MobileDetail = ({ mobileId }) => {
  return (
    <MobileDetailWrapper>
      {mobileId}
      <StyledImage src="https://www.sathya.in/Media/Default/Thumbs/0038/0038136-vivo-s1-pro-black8gb-ram-128gb-storage-250.jpg" />
      <MobileInfoWrapper>
        <MobileInfo />
        <AddCartInfo />
      </MobileInfoWrapper>
    </MobileDetailWrapper>
  )
}

MobileDetail.propTypes = {
  mobileId: PropTypes.string
}
