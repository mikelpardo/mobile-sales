import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapMobileDetailDtoToMobileDetail, mapMobileListDtoToMobileList } from 'core/domain/Mobile/mobile.mapper'
import { cookieService } from 'core/services/Cookie/cookie.service'

const findAll = async () => {
  const cookieValue = cookieService.get('findAll')

  if (cookieValue !== '') {
    return cookieValue
  }

  const mobileListDto = await fontTestApiClient.get(apiRouteProvider.mobileList)
  const mobileList = mapMobileListDtoToMobileList(mobileListDto)

  cookieService.save('findAll', mobileList)
  return mobileList
}

const findDetail = async mobileId => {
  const cookieValue = cookieService.get('findDetail')

  if (cookieValue !== '') {
    return cookieValue
  }

  const mobileDetailDto = await fontTestApiClient.get(apiRouteProvider.mobileDetail(mobileId))
  const mobileDetail = mapMobileDetailDtoToMobileDetail(mobileDetailDto)

  cookieService.save('findDetail', mobileDetail)
  return mobileDetail
}

export const mobileRepository = {
  findAll,
  findDetail
}
