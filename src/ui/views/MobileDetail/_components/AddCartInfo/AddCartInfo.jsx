import React from 'react'
import { Button } from 'ui/components/Button'
import { NativeSelect } from 'ui/components/NativeSelect'
import { AddCartInfoWrapper } from 'ui/views/MobileDetail/_components/AddCartInfo/AddCartInfo.Styles'

export const AddCartInfo = () => {
  return (
    <AddCartInfoWrapper>
      <NativeSelect label="Memory" name="memory" options={[]} selectedValue={''} />
      <NativeSelect label="Colors" name="colors" options={[]} selectedValue={''} />
      <Button>Add to cart</Button>
    </AddCartInfoWrapper>
  )
}
