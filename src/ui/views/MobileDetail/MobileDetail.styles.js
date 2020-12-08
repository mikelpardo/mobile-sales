import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const MobileDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: ${rem(sizes.xsmall)};
`

export const MobileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${rem(sizes.xsmall)};
`

export const StyledImage = styled.img`
  width: ${rem(sizes.scale(50))};
  height: ${rem(sizes.scale(50))};

  padding: ${rem(sizes.xsmall)};
`
