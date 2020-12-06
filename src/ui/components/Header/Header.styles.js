import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'
import { Text } from 'ui/components/Text/Text'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: ${rem(sizes.xsmall)};
`

export const StyledTitle = styled(Text)`
  &:hover {
    cursor: pointer;
  }
`
