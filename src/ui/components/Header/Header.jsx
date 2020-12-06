import React from 'react'
import { HeaderWrapper, TitleWrapper } from 'ui/components/Header/Header.styles'
import { useHistory } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'
import { Text } from 'ui/components/Text/Text'

export const Header = () => {
  const history = useHistory()

  const reedirectToHome = () => history.push(routeProvider.home)

  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Text onClick={() => reedirectToHome()} textType="title">
          Movile sales
        </Text>
      </TitleWrapper>
    </HeaderWrapper>
  )
}
