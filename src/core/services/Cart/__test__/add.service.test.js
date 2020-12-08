import { cartRepository } from 'core/domain/Cart/cart.repository'
import { cartService } from 'core/services/Cart'
import { aMobileData } from 'core/domain/Cart/__test__/cart.builder'

describe('Add to cart service test', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('adds to cart', async () => {
    const mockedTotalItems = { count: 1 }
    jest.spyOn(cartRepository, 'add').mockResolvedValue({ count: 1 })

    const totalItems = await cartService.add(aMobileData())

    expect(totalItems).toEqual(mockedTotalItems)
    expect(cartRepository.add).toHaveBeenCalledWith(aMobileData())
  })
})
