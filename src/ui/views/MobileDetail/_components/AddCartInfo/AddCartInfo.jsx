import React, { useContext, useState } from 'react'
import { Button } from 'ui/components/Button'
import { NativeSelect } from 'ui/components/NativeSelect'
import { AddCartInfoWrapper } from 'ui/views/MobileDetail/_components/AddCartInfo/AddCartInfo.Styles'
import PropTypes from 'prop-types'
import { cartService } from 'core/services/Cart'
import { CartContext } from 'ui/utils/cart.context'

export const AddCartInfo = ({ mobileId, colorOptions, storageOptions }) => {
  const getOptionSelectedValue = options => {
    if (options.length > 1) {
      return ''
    }

    return options[0].code
  }

  const [selectedStorage, setSelectedStorage] = useState(getOptionSelectedValue(storageOptions))
  const [selectedColor, setSelectedColor] = useState(getOptionSelectedValue(colorOptions))
  const cartContext = useContext(CartContext)

  const formatOptions = options => options.map(option => ({ value: option.code, text: option.name }))

  const formatSelectedOptionsToMobileData = () => {
    return {
      id: mobileId,
      colorCode: selectedColor,
      storageCode: selectedStorage
    }
  }

  const canAddMobileToCart = () => selectedStorage !== '' && selectedColor !== ''

  const addToCart = async () => {
    if (canAddMobileToCart()) {
      const mobileData = formatSelectedOptionsToMobileData()
      const items = await cartService.add(mobileData)
      cartContext.setItems(items.count)
    }
  }

  return (
    <AddCartInfoWrapper>
      <NativeSelect
        label="Storage"
        name="storage"
        options={formatOptions(storageOptions)}
        selectedValue={selectedStorage}
        onChange={setSelectedStorage}
        placeHolder="Select a storage option"
      />
      <NativeSelect
        label="Colors"
        name="colors"
        options={formatOptions(colorOptions)}
        selectedValue={selectedColor}
        onChange={setSelectedColor}
        placeHolder="Select a color option"
      />
      <Button onClick={() => addToCart()} disbaledButton={!canAddMobileToCart()}>
        Add to cart
      </Button>
    </AddCartInfoWrapper>
  )
}

AddCartInfo.propTypes = {
  mobileId: PropTypes.string,
  colorOptions: PropTypes.array,
  storageOptions: PropTypes.array
}
