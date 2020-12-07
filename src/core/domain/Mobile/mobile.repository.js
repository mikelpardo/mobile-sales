import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapMobileListDtoToMobileList } from 'core/domain/Mobile/mobile.mapper'

const findAll = async () => {
  const mobileListDto = await fontTestApiClient.get(apiRouteProvider.mobileList)
  return mapMobileListDtoToMobileList(mobileListDto)
}

export const mobileRepository = {
  findAll
}
