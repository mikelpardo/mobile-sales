import { mobileRepository } from 'core/domain/Mobile/mobile.repository'
import {
  aMobileDetail,
  aMobileDetailDto,
  aMobileList,
  aMobileListDto
} from 'core/domain/Mobile/__test__/mobile.builder'
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

  it('finds a mobile detail', async () => {
    const mobileId = '1'
    jest.spyOn(fontTestApiClient, 'get').mockResolvedValue(aMobileDetailDto())

    const mobileDetail = await mobileRepository.findDetail(mobileId)

    expect(mobileDetail).toEqual(aMobileDetail())
  })
})
