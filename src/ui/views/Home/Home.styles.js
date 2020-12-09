import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const MobileListWrapper = styled.div`
  padding: ${rem(sizes.xsmall)};
`

export const MobileList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: -${rem(sizes.base)};
  margin-left: -${rem(sizes.base)};

  & > * {
    margin-top: ${rem(sizes.base)};
    margin-left: ${rem(sizes.base)};
  }
`
