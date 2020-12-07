import { mobileRepository } from 'core/domain/Mobile/mobile.repository'
import { aMobileList, aMobileListDto } from 'core/domain/Mobile/__test__/mobile.builder'
import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'

describe('Mobile repository', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('finds all mobiles', async () => {
    jest.spyOn(fontTestApiClient, 'get').mockResolvedValue(aMobileListDto())

    const mobileList = await mobileRepository.findAll()

    expect(mobileList).toEqual(aMobileList())
  })
})
