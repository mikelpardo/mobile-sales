import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CartContext = createContext({ items: 0, setItems: () => {} })

export const CartContextProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0)

  return <CartContext.Provider value={{ items: totalItems, setItems: setTotalItems }}>{children}</CartContext.Provider>
}

CartContextProvider.propTypes = {
  children: PropTypes.any
}
