import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle, StyledText } from 'ui/components/Text/Text.styles'

export const Text = ({ textType, children }) => {
  if (textType === 'title') {
    return <StyledTitle>{children}</StyledTitle>
  }

  return <StyledText>{children}</StyledText>
}

Text.propTypes = {
  textType: PropTypes.string,
  children: PropTypes.element
}
