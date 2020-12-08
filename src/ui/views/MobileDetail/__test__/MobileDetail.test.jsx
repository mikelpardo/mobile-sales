import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { aMobileDetail } from 'core/domain/Mobile/__test__/mobile.builder'
import { aMobileData } from 'core/domain/Cart/__test__/cart.builder'
import { mobileService } from 'core/services/Mobile'
import { MobileDetail } from 'ui/views/MobileDetail/MobileDetail'
import { cartService } from 'core/services/Cart'

describe('Mobile detail view tests', () => {
  beforeEach(() => {
    jest.spyOn(mobileService, 'getDetail').mockResolvedValue(aMobileDetail())
    jest.spyOn(cartService, 'add').mockResolvedValue({ count: 1 })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays mobile info', async () => {
    render(<MobileDetail mobileId={'1'} />)

    const mobileBrandText = await screen.findByText(aMobileDetail().brand)
    expect(mobileBrandText).toBeDefined()
  })

  it('displays mobile options to add to cart', async () => {
    render(<MobileDetail mobileId={'1'} />)

    const colorSelector = await screen.findByTestId('Colors')
    expect(colorSelector).toBeDefined()

    const storageSelector = await screen.findByTestId('Storage')
    expect(storageSelector).toBeDefined()

    const addCartButton = await screen.findByText('Add to cart')
    expect(addCartButton).toBeDefined()
  })

  it('sends mobile data to the cart', async () => {
    render(<MobileDetail mobileId={'ZmGrkLRPXOTpxsU4jjAcv'} />)

    const storageSelector = await screen.findByTestId('Storage')
    fireEvent.change(storageSelector, { target: { value: aMobileDetail().storageOptions[0].code } })

    const addCartButton = await screen.findByText('Add to cart')
    fireEvent.click(addCartButton)

    expect(cartService.add).toHaveBeenCalledWith(aMobileData())
  })
})
