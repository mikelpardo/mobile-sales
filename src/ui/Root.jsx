import React from 'react'
import { routeProvider } from 'ui/utils/routerProvider'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Header } from 'ui/components/Header/Header'
import styled from 'styled-components/macro'
import { rem } from 'polished'
import { Home } from 'ui/views/Home/Home'
import { GlobalStyles } from 'ui/theme'

export const Root = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Header />
        <Switch>
          <Route path={routeProvider.home} exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
  margin: ${rem(20)};
`
