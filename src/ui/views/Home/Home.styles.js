import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const MovileListWrapper = styled.div`
  padding: ${rem(sizes.xsmall)};
`

export const MovileList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: -${rem(sizes.smbaseall)};
  margin-left: -${rem(sizes.base)};

  & > * {
    margin-top: ${rem(sizes.base)};
    margin-left: ${rem(sizes.base)};
  }
`
