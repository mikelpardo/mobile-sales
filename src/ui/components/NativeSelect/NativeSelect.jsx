import React, { useState, useEffect } from 'react'
import {
  ArrowDownIconStyled,
  Caption,
  CaptionText,
  EmptyOptionField,
  SelectField,
  Wrapper,
  FormFieldContainer
} from 'ui/components/NativeSelect/NativeSelect.styles'
import PropTypes from 'prop-types'

export const NativeSelect = ({ label, options, name, selectedValue, onChange, disabled }) => {
  const [hasValue, handleHasValue] = useState(false)
  const [selectedOption, setSelectedOption] = useState()

  const isDiscardDefaultInitialOption = selectedOption =>
    Boolean(
      selectedOption &&
        (typeof selectedOption === 'number' || (typeof selectedOption === 'string' && selectedOption.trim().length > 0))
    )

  useEffect(() => {
    if (isDiscardDefaultInitialOption(selectedValue)) {
      setSelectedOption(selectedValue)
      handleHasValue(true)
    } else {
      setSelectedOption('')
      handleHasValue(false)
    }
  }, [selectedValue])

  const getCaption = () => {
    let caption = ''

    if (hasValue) {
      const option = options.find(option => {
        if (typeof option.value === 'number') {
          return option.value === Number(selectedOption)
        } else {
          return option.value === selectedOption
        }
      })

      if (option) {
        caption = option.text
      }
    }

    return caption
  }

  const onSelectedOptionChange = event => {
    setSelectedOption(event.currentTarget.value)
    if (onChange) {
      onChange(event.currentTarget.value)
    }
    handleHasValue(true)
  }

  return (
    <FormFieldContainer>
      <Wrapper>
        <SelectField
          data-testid={label}
          name={name}
          onChange={onSelectedOptionChange}
          value={selectedOption}
          disabled={disabled}>
          <EmptyOptionField key={''} value={''}>
            {''}
          </EmptyOptionField>
          {options.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.text}
            </option>
          ))}
        </SelectField>
        <Caption>
          <CaptionText>{getCaption()}</CaptionText>
          <ArrowDownIconStyled />
        </Caption>
      </Wrapper>
    </FormFieldContainer>
  )
}

NativeSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}
