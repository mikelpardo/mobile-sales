import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const MovileListItemWrapper = styled.div`
  display: flex;
  width: ${rem(sizes.scale(110))};
`

export const StyledMovileListItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: ${rem(sizes.xsmall)};

  border: solid black 1px;
`

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;

  margin-left: auto;
  margin-right: auto;
`
