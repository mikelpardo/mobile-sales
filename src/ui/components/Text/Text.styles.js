import { sizes } from 'ui/theme/sizes'
import styled from 'styled-components/macro'
import { rem } from 'polished'

export const StyledText = styled.div`
  font-size: ${rem(sizes.small)};
  line-height: ${sizes.base / sizes.small};
  font-weight: ${sizes.scale(100)};
  color: black;
`

export const StyledTitle = styled.div`
  font-size: ${rem(sizes.scale(12))};
  line-height: ${sizes.medium / sizes.scale(12)};
  font-weight: ${sizes.scale(100)};
  color: black;
`
