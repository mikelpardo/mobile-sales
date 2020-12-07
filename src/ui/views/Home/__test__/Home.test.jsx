import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { aMobileList } from 'core/domain/Mobile/__test__/mobile.builder'
import { mobileService } from 'core/services/Mobile'
import { Root } from 'ui/Root'

describe('Home view tests', () => {
  beforeEach(() => {
    jest.spyOn(mobileService, 'getAll').mockResolvedValue(aMobileList())
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays home header title', async () => {
    render(<Root />)

    const homeHeaderTitle = await screen.findByText('Mobile sales')
    expect(homeHeaderTitle).toBeDefined()
  })

  it('displays mobile list search input', async () => {
    render(<Root />)

    const searchInput = await screen.findByPlaceholderText('Search')
    expect(searchInput).toBeDefined()
  })

  it('displays mobile list items', async () => {
    const aMobileModel = aMobileList()[0].model
    render(<Root />)

    const mobileModelText = await screen.findByText(aMobileModel)
    expect(mobileModelText).toBeDefined()
  })

  it('searches one mobile', async () => {
    const aMobileToSearch = aMobileList()[0]
    const aMissingMobile = aMobileList()[1]

    render(<Root />)

    const searchInput = await screen.findByPlaceholderText('Search')
    fireEvent.change(searchInput, { target: { value: aMobileToSearch.model } })

    const searchedMobile = await screen.findByText(aMobileToSearch.model)
    expect(searchedMobile).toBeDefined()

    const missingMobile = screen.queryByText(aMissingMobile.model)
    expect(missingMobile).toBeNull()
  })
})
