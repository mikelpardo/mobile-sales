import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routeProvider } from 'ui/utils/routerProvider'
import { Text } from 'ui/components/Text/Text'
import { StyledLi, StyledUl } from './BreadCrum.styles'

export const Breadcrum = () => {
  const location = useLocation()

  if (location.pathname === routeProvider.home) {
    return (
      <StyledUl>
        <StyledLi>
          <Text>Home</Text>
        </StyledLi>
      </StyledUl>
    )
  }

  return (
    <StyledUl>
      <StyledLi>
        <Link to={routeProvider.home}>Home</Link>
      </StyledLi>
      <StyledLi>
        <Text>/</Text>
      </StyledLi>
      <StyledLi>
        <Text>Detail</Text>
      </StyledLi>
    </StyledUl>
  )
}
