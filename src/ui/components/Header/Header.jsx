import React from 'react'
import { HeaderWrapper, TitleWrapper } from 'ui/components/Header/Header.styles'
import { useHistory } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'
import { Text } from 'ui/components/Text/Text'
import { CartIcon } from 'ui/components/CartIcon/CartIcon'
import { Breadcrum } from 'ui/components/Breadcrum/Breadcrum'
import { sizes } from 'ui/theme/sizes'

export const Header = () => {
  const history = useHistory()

  const reedirectToHome = () => history.push(routeProvider.home)

  return (
    <HeaderWrapper>
      <TitleWrapper onClick={() => reedirectToHome()}>
        <Text marginBottom={sizes.tiny} textType="title">
          Mobile sales
        </Text>
        <Breadcrum />
      </TitleWrapper>
      <CartIcon />
    </HeaderWrapper>
  )
}
