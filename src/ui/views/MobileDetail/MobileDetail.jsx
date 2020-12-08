import React, { useEffect, useState } from 'react'
import {
  StyledImage,
  MobileInfoWrapper,
  MobileDetailWrapper,
  StyledMobileDetail
} from 'ui/views/MobileDetail/MobileDetail.styles'
import { AddCartInfo } from 'ui/views/MobileDetail/_components/AddCartInfo/AddCartInfo'
import { MobileInfo } from 'ui/views/MobileDetail/_components/MobileInfo/MobileInfo'
import PropTypes from 'prop-types'
import { mobileService } from 'core/services/Mobile'
import { Spinner } from 'ui/components/Spinner'

export const MobileDetail = ({ mobileId }) => {
  const [mobileDetail, setMobileDetail] = useState()
  const [isLoading, handleIsLoading] = useState(true)

  useEffect(() => {
    const loadMobileData = async () => {
      const detail = await mobileService.getDetail(mobileId)
      setMobileDetail(detail)
      handleIsLoading(false)
    }

    loadMobileData()
  }, [mobileId])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <MobileDetailWrapper>
      <StyledMobileDetail>
        <StyledImage src={mobileDetail.imgUrl} />
        <MobileInfoWrapper>
          <MobileInfo mobileDetail={mobileDetail} />
          <AddCartInfo
            mobileId={mobileDetail.id}
            colorOptions={mobileDetail.colorOptions}
            storageOptions={mobileDetail.storageOptions}
          />
        </MobileInfoWrapper>
      </StyledMobileDetail>
    </MobileDetailWrapper>
  )
}

MobileDetail.propTypes = {
  mobileId: PropTypes.string
}
