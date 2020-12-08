import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const HeaderWrapper = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: ${rem(sizes.xsmall)};
`

export const TitleWrapper = styled.div`
  dislplay: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`
