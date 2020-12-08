import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'
import { apiRouteProvider } from 'core/infrastructure/apiRouteProvider'

const add = async mobileData => fontTestApiClient.post(apiRouteProvider.addToCart, mobileData)

export const cartRepository = {
  add
}
