import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle, StyledText } from 'ui/components/Text/Text.styles'

export const Text = ({ textType = 'text', children, isBold = false, marginRight, marginBottom }) => {
  if (textType === 'title') {
    return (
      <StyledTitle isBold={isBold} marginRight={marginRight} marginBottom={marginBottom}>
        {children}
      </StyledTitle>
    )
  }

  return (
    <StyledText isBold={isBold} marginRight={marginRight} marginBottom={marginBottom}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  textType: PropTypes.string,
  children: PropTypes.any,
  isBold: PropTypes.bool,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number
}
