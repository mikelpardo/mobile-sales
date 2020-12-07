import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'
import { mapMovileListDtoToMovileList } from 'core/domain/Movile/movile.mapper'

const findAll = async () => {
  const movileListDto = await fontTestApiClient.get(apiRouteProvider.movileList)
  return mapMovileListDtoToMovileList(movileListDto)
}

export const movileRepository = {
  findAll
}
