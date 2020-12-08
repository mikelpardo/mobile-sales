import React from 'react'
import { HeaderWrapper, TitleWrapper } from 'ui/components/Header/Header.styles'
import { useHistory } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'
import { Text } from 'ui/components/Text/Text'
import { CartIcon } from 'ui/components/CartIcon/CartIcon'

export const Header = () => {
  const history = useHistory()

  const reedirectToHome = () => history.push(routeProvider.home)

  return (
    <HeaderWrapper>
      <TitleWrapper onClick={() => reedirectToHome()}>
        <Text textType="title">Mobile sales</Text>
      </TitleWrapper>
      <CartIcon />
    </HeaderWrapper>
  )
}
