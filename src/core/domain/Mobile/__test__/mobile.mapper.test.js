import { mapMobileDetailDtoToMobileDetail, mapMobileListDtoToMobileList } from 'core/domain/Mobile/mobile.mapper'
import {
  aMobileDetail,
  aMobileDetailDto,
  aMobileList,
  aMobileListDto
} from 'core/domain/Mobile/__test__/mobile.builder'

describe('mobile mappers test', () => {
  it('maps mobile list dto to mobile list', () => {
    const mobileList = mapMobileListDtoToMobileList(aMobileListDto())

    expect(mobileList).toEqual(aMobileList())
  })

  it('maps mobile detail dto to mobile detail', () => {
    const mobileDetail = mapMobileDetailDtoToMobileDetail(aMobileDetailDto())

    expect(mobileDetail).toEqual(aMobileDetail())
  })
})
