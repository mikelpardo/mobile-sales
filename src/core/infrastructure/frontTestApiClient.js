import { AxiosApiClient } from 'core/infrastructure/apiClient'
import { getApiUrl } from 'core/infrastructure/GetApiUrl'

export const fontTestApiClient = new AxiosApiClient(getApiUrl())
