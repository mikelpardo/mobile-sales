import React from 'react'
import { Text } from 'ui/components/Text/Text'
import {
  MovileDataWrapper,
  MovileListItemWrapper,
  StyledImg,
  StyledMovileListItem
} from 'ui/views/Home/_components/MovileListItem/MovileListItem'
import PropTypes from 'prop-types'

export const MovileListItem = ({ movile }) => {
  return (
    <MovileListItemWrapper>
      <StyledMovileListItem>
        <StyledImg src={movile.imgUrl} />
        <MovileDataWrapper>
          <Text>{movile.brand}</Text>
          <Text>{movile.model}</Text>
          <Text>{movile.price}</Text>
        </MovileDataWrapper>
      </StyledMovileListItem>
    </MovileListItemWrapper>
  )
}

MovileListItem.propTypes = {
  movile: PropTypes.object.isRequired
}
