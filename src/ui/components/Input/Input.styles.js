import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const InputField = styled.input`
  width: 100%;
  height: ${rem(sizes.medium)};

  font-size: ${rem(sizes.small)};
  line-height: ${sizes.base / sizes.small};

  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;

  &:focus {
    text-overflow: ellipsis;
  }
`
