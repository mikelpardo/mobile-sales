import { rem } from 'polished'
import styled from 'styled-components'
import { sizes } from 'ui/theme/sizes'
import PropTypes from 'prop-types'

export const Button = styled.button`
  position: relative;

  display: inline-flex;
  justify-content: center;

  padding: ${rem(sizes.xsmall)} ${rem(sizes.scale(5))};

  height: ${rem(sizes.scale(10))};

  color: white;
  border-width: 0;

  text-decoration: none;
  line-height: 1;

  cursor: pointer;

  will-change: opacity;
  transition-delay: 0.05s;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 5px;
  }

  background-color: cornflowerblue;
  transition: background-color 0.3s, color 0.3s;
`

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any
}
