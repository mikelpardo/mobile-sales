import React from 'react'
import { render, screen } from '@testing-library/react'
import { aMovileList } from 'core/domain/Movile/__test__/movile.builder'
import { movileService } from 'core/services/Movile'
import { Root } from 'ui/Root'

describe('Home view tests', () => {
  beforeEach(() => {
    jest.spyOn(movileService, 'getAll').mockResolvedValue(aMovileList())
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays home header title', async () => {
    render(<Root />)

    const homeHeaderTitle = await screen.findByText('Movile sales')
    expect(homeHeaderTitle).toBeDefined()
  })

  it('displays movile list search input', async () => {
    render(<Root />)

    const searchInput = await screen.findByPlaceholderText('Search')
    expect(searchInput).toBeDefined()
  })

  it('displays movile list items', async () => {
    const aMovileModel = aMovileList()[0].model
    render(<Root />)

    const movileModelText = await screen.findByText(aMovileModel)
    expect(movileModelText).toBeDefined()
  })
})
