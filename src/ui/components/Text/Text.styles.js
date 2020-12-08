import { sizes } from 'ui/theme/sizes'
import styled from 'styled-components/macro'
import { rem } from 'polished'

export const StyledText = styled.div`
  ${p => p.marginRight && `margin-right: ${rem(p.marginRight)};`}
  ${p => p.marginBottom && `margin-bottom: ${rem(p.marginBottom)};`}

  font-size: ${rem(sizes.small)};
  line-height: ${sizes.base / sizes.small};
  font-weight: ${p => (p.isBold ? 'bold' : sizes.scale(100))};
  color: black;
`

export const StyledTitle = styled.div`
  ${p => p.marginRight && `margin-right: ${rem(p.marginRight)};`}
  ${p => p.marginBottom && `margin-bottom: ${rem(p.marginBottom)};`}


  font-size: ${rem(sizes.scale(12))};
  line-height: ${sizes.medium / sizes.scale(12)};
  font-weight: ${p => (p.isBold ? 'bold' : sizes.scale(100))};
  color: black;
`
