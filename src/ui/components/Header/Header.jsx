import React from 'react'
import { HeaderWrapper, StyledTitle } from 'ui/components/Header/Header.styles'
import { useHistory } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'

export const Header = () => {
  const history = useHistory()
  
  const reedirectToHome = () => history.push(routeProvider.home)

  return (
    <HeaderWrapper>
      <StyledTitle onClick={() => reedirectToHome()}>Movile sales</StyledTitle>
    </HeaderWrapper>
  )
}
