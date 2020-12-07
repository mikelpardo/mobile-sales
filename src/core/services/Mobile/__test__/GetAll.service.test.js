import { mobileRepository } from 'core/domain/Mobile/mobile.repository'
import { aMobileList } from 'core/domain/Mobile/__test__/mobile.builder'
import { mobileService } from 'core/services/Mobile'

describe('Get all mobiles service', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('gets all mobiles', async () => {
    jest.spyOn(mobileRepository, 'findAll').mockResolvedValue(aMobileList())

    const mobileList = await mobileService.getAll()

    expect(mobileList).toEqual(aMobileList())
  })
})
