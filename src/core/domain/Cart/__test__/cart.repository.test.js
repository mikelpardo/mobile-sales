import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { cartRepository } from 'core/domain/Cart/cart.repository'
import { aMobileData } from 'core/domain/Cart/__test__/cart.builder'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'

describe('Cart repository test', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('adds mobile to cart', async () => {
    const mockedTotalItems = { count: 1 }
    jest.spyOn(fontTestApiClient, 'post').mockResolvedValue(mockedTotalItems)

    const totalItems = await cartRepository.add(aMobileData())

    expect(totalItems).toEqual(mockedTotalItems)
    expect(fontTestApiClient.post).toHaveBeenCalledWith(apiRouteProvider.addToCart, aMobileData())
  })
})
