import React from 'react'
import { Button } from 'ui/components/Button'
import { NativeSelect } from 'ui/components/NativeSelect'
import { AddCartInfoWrapper } from 'ui/views/MobileDetail/_components/AddCartInfo/AddCartInfo.Styles'
import PropTypes from 'prop-types'

export const AddCartInfo = ({ colorOptions, storageOptions }) => {
  const formatOptions = options => options.map(option => ({ value: option.code, text: option.name }))
  return (
    <AddCartInfoWrapper>
      <NativeSelect label="Memory" name="memory" options={formatOptions(colorOptions)} />
      <NativeSelect label="Colors" name="colors" options={formatOptions(storageOptions)} />
      <Button>Add to cart</Button>
    </AddCartInfoWrapper>
  )
}

AddCartInfo.propTypes = {
  colorOptions: PropTypes.array,
  storageOptions: PropTypes.array
}
