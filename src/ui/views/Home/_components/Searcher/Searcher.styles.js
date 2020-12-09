import { rem } from 'polished'
import styled from 'styled-components/macro'
import { sizes } from 'ui/theme/sizes'

export const SearcherWrapper = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;

  margin-bottom: ${rem(sizes.base)};
`

export const StyledInput = styled.div`
  width: ${rem(sizes.scale(100))};
`
