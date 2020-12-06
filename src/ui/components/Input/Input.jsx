import React from 'react'
import PropTypes from 'prop-types'
import { InputField } from 'ui/components/Input/Input.styles'

export const Input = ({ onChange, placeHolder, value }) => (
  <InputField type="text" onChange={onChange} placeholder={placeHolder} value={value} />
)

Input.propTypes = {
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  value: PropTypes.string
}
