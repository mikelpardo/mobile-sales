import React, { useContext } from 'react'
import Cart from 'ui/icons/cart.png'
import { CartIconWrapper, StyledImag, CartIconNumber } from 'ui/components/CartIcon/CartIcon.styles'
import { CartContext } from 'ui/utils/cart.context'

export const CartIcon = () => {
  const cartContext = useContext(CartContext)

  return (
    <CartIconWrapper>
      <StyledImag src={Cart} />
      <CartIconNumber>{cartContext.items}</CartIconNumber>
    </CartIconWrapper>
  )
}
