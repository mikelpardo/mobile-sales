import React from 'react'
import { render, screen } from '@testing-library/react'
import { aMobileDetail } from 'core/domain/Mobile/__test__/mobile.builder'
import { mobileService } from 'core/services/Mobile'
import { MobileDetail } from 'ui/views/MobileDetail/MobileDetail'

describe('Mobile detail view tests', () => {
  beforeEach(() => {
    jest.spyOn(mobileService, 'getDetail').mockResolvedValue(aMobileDetail())
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

    const storageSelector = await screen.findByTestId('Memory')
    expect(storageSelector).toBeDefined()

    const addCartButton = await screen.findByText('Add to cart')
    expect(addCartButton).toBeDefined()
  })
})
