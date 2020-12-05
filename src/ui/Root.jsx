import React from 'react'
import { routeProvider } from './utils/routerProvider'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Header } from './components/Header/Header'
import styled from 'styled-components/macro'
import { rem } from 'polished'

export const Root = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route path={routeProvider.home} exact />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
  margin: ${rem(20)};
`
