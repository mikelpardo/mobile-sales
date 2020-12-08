import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapMobileDetailDtoToMobileDetail, mapMobileListDtoToMobileList } from 'core/domain/Mobile/mobile.mapper'
import { localStorageService } from 'core/services/LocalStorage/localStorage.service'

const findAll = async () => {
  const storageData = localStorageService.get('findAll')

  if (storageData !== undefined) {
    return storageData
  }

  const mobileListDto = await fontTestApiClient.get(apiRouteProvider.mobileList)
  const mobileList = mapMobileListDtoToMobileList(mobileListDto)

  localStorageService.save('findAll', mobileList)
  return mobileList
}

const findDetail = async mobileId => {
  const storageData = localStorageService.get(mobileId)

  if (storageData !== undefined) {
    return storageData
  }

  const mobileDetailDto = await fontTestApiClient.get(apiRouteProvider.mobileDetail(mobileId))
  const mobileDetail = mapMobileDetailDtoToMobileDetail(mobileDetailDto)

  localStorageService.save(mobileId, mobileDetail)
  return mobileDetail
}

export const mobileRepository = {
  findAll,
  findDetail
}
