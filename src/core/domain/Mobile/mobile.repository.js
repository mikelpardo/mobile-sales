import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapMobileDetailDtoToMobileDetail, mapMobileListDtoToMobileList } from 'core/domain/Mobile/mobile.mapper'

const findAll = async () => {
  const mobileListDto = await fontTestApiClient.get(apiRouteProvider.mobileList)
  return mapMobileListDtoToMobileList(mobileListDto)
}

const findDetail = async mobileId => {
  const mobileDetailDto = await fontTestApiClient.get(apiRouteProvider.mobileDetail(mobileId))
  return mapMobileDetailDtoToMobileDetail(mobileDetailDto)
}

export const mobileRepository = {
  findAll,
  findDetail
}
