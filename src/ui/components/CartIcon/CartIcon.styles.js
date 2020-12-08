import { rem } from 'polished'
import styled from 'styled-components'
import { sizes } from 'ui/theme/sizes'

export const CartIconWrapper = styled.div`
  position: relative;
`

export const CartIconNumber = styled.div`
  position: absolute;
  top: -${rem(sizes.tiny)};
  right: -${rem(sizes.tiny)};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${rem(sizes.scale(5))};
  height: ${rem(sizes.scale(5))};

  border: 1px solid;
  border-color: white;
  border-radius: 50%;

  background-color: red;
  color: white;

  box-sizing: border-box;

  z-index: 0;

  &::after {
    position: absolute;

    height: ${rem(sizes.scale(5))};
    width: ${rem(sizes.scale(5))};

    border: 1px solid;
    border-color: white;
    border-radius: 50%;

    background-color: red;
    color: white;

    z-index: -1;
  }
`

export const StyledImag = styled.img`
  width: ${rem(sizes.large)};
  height: ${rem(sizes.large)};
`
