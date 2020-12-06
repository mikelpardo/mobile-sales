import React from 'react'
import {
  MovileListItemWrapper,
  StyledImg,
  StyledMovileListItem
} from 'ui/views/Home/_components/MovileListItem/MovileListItem'

export const MovileListItem = () => {
  return (
    <MovileListItemWrapper>
      <StyledMovileListItem>
        <StyledImg src="https://static.carrefour.es/hd_350x_/crs/cdn_static/category/hd/cat4167639.jpg" />
        <p>Brand</p>
        <p>Model</p>
        <p>Price</p>
      </StyledMovileListItem>
    </MovileListItemWrapper>
  )
}
