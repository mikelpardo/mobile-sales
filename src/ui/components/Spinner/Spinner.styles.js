import { rem } from 'polished'
import { keyframes } from 'styled-components'
import styled from 'styled-components/macro'
import { sizes } from 'ui/theme/sizes'

export const Wrapper = styled.span`
  position: relative;

  display: block;
  margin: 0 auto;
  width: ${rem(sizes.large)};

  overflow: hidden;
`

const spinAnimation = keyframes`
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const InnerWrapper = styled.span`
  display: block;
  padding-top: 100%;
  width: 100%;
  height: 0;

  transform-origin: 50% 50%;

  animation: ${spinAnimation} 3s linear infinite;
`

const Line = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  :before {
    content: '';

    position: absolute;
    top: 0;
    left: 79%;

    width: 100%;
    height: 100%;

    border-color: transparent;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
  }
`

export const PrimaryLine = styled(Line)`
  transform: scale(0.99) rotate(0deg) translate(-79%, 0);

  :before {
    border-color: #575352;
  }
`

export const SecondaryLine = styled(Line)`
  transform: scale(0.99) rotate(120deg) translate(-79%, 0);

  :before {
    border-color: #8c8482;
  }
`

export const TernaryLine = styled(Line)`
  transform: scale(0.99) rotate(240deg) translate(-79%, 0);

  :before {
    border-color: #bab0ad;
  }
`
