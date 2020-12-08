import { rem } from 'polished'
import styled from 'styled-components/macro'
import { sizes } from 'ui/theme/sizes'

export const StyledUl = styled.ul`
  display: flex;
  align-items: baseline;

  width: fit-content;

  margin-top: ${rem(sizes.tiny)}
  padding: ${rem(sizes.xsmall)} ${rem(sizes.small)};

  background-color: #eee;
`

export const StyledLi = styled.li`
  margin-right: ${rem(sizes.tiny)};
`
