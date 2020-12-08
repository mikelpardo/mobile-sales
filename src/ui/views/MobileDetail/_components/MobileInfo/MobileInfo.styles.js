import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const MobileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: ${rem(sizes.xsmall)};
`
