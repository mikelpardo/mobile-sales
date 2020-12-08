import React from 'react'
import Cart from 'ui/icons/cart.png'
import { CartIconWrapper, StyledImag, CartIconNumber } from 'ui/components/CartIcon/CartIcon.styles'

export const CartIcon = () => {
  return (
    <CartIconWrapper>
      <StyledImag src={Cart} />
      <CartIconNumber>{0}</CartIconNumber>
    </CartIconWrapper>
  )
}
