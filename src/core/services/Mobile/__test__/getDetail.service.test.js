import { mobileRepository } from 'core/domain/Mobile/mobile.repository'
import { aMobileDetail } from 'core/domain/Mobile/__test__/mobile.builder'
import { mobileService } from 'core/services/Mobile'

describe('Get mobile detail', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('gets a mobile detail', async () => {
    const mobileId = '1'
    jest.spyOn(mobileRepository, 'findDetail').mockResolvedValue(aMobileDetail())

    const mobileDetail = await mobileService.getDetail(mobileId)

    expect(mobileDetail).toEqual(aMobileDetail())
  })
})
