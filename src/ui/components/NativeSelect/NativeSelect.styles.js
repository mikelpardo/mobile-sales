import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'
import { ArrowDownIcon } from './ArrowDownIcon'

export const FormFieldContainer = styled.div`
  margin-bottom: ${rem(sizes.small)};
`

export const Wrapper = styled.label`
  position: relative;

  display: flex;
  flex-flow: column;
  justify-content: flex-end;

  width: 100%;
  height: ${rem(sizes.large)};
`

export const Caption = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  padding-right: ${rem(sizes.xtiny)};

  overflow: hidden;
  white-space: nowrap;

  color: black;

  border-bottom: 1px solid black;
`

export const CaptionText = styled.span`
  flex-grow: 1;

  height: ${rem(sizes.base)};

  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
`

export const ArrowDownIconStyled = styled(ArrowDownIcon)`
  flex-shrink: 0;

  width: ${rem(sizes.base)};
  height: ${rem(sizes.base)};
`

export const SelectField = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 100%;

  opacity: 0;
  -webkit-appearance: none;
  -moz-appearance: none;

  z-index: 2;
`

export const EmptyOptionField = styled.option`
  display: none;
`
