import styled from 'styled-components/macro'
import { rem } from 'polished'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: ${rem(10)};
`

export const StyledTitle = styled.h1`
  &:hover {
    cursor: pointer;
  }
`
