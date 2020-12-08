import React from 'react'
import { routeProvider } from 'ui/utils/routerProvider'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Header } from 'ui/components/Header/Header'
import styled from 'styled-components/macro'
import { rem } from 'polished'
import { Home } from 'ui/views/Home/Home'
import { GlobalStyles } from 'ui/theme'
import { MobileDetail } from 'ui/views/MobileDetail/MobileDetail'
import { CartContextProvider } from 'ui/utils/cart.context'

export const Root = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Container>
          <Header />
          <Switch>
            <Route path={routeProvider.home} exact component={Home} />
            <Route
              path={routeProvider.mobileDetail.path}
              exact
              render={({ match: innerMatch }) => {
                return <MobileDetail mobileId={innerMatch.params[routeProvider.mobileDetail.params.mobileId]} />
              }}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    </CartContextProvider>
  )
}

const Container = styled.div`
  margin: ${rem(20)};
`
